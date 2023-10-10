import PropTypes from 'prop-types';
import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { NotFaundPhoto } from 'components/SmalComponent/SmalComponent';
import Button from 'components/Button/Button';
import { Error } from 'components/SmalComponent/Error';

import { List, LoaderWrapper, TextMassage } from './ItemGallary.styled';

const KEY = '37747663-1158017a6a7069441e8b1da5b';

class ImageGallery extends Component {
  state = {
    data: [],
    total: 0,
    page: 1,
    status: 'idle',
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      try {
        this.setState({ page: 1, data: [], total: 0, status: 'pending' });
        const { total, hits } = await this.getFetch();

        this.setState({ data: hits, total, status: 'resolved' });
      } catch {
        this.setState({ status: 'rejected' });
      }
    }

    if (prevState.page !== this.state.page) {
      const { hits } = await this.getFetch();
      if (prevProps.searchName !== this.props.searchName) {
        this.setState({ data: hits });
        return;
      }
      this.setState({ data: [...prevState.data, ...hits] });
    }
  }

  getFetch = async () => {
    const params = new URLSearchParams({
      q: this.props.searchName,
      per_page: 12,
      image_type: 'photo',
      page: this.state.page,
      orientation: 'horizontal',
    });

    const respons = await fetch(
      `https://pixabay.com/api/?key=${KEY}&${params}`
    );

    if (!respons.ok) {
      throw new Error('Error, try again.');
    }

    const data = await respons.json();

    return data;
  };

  handleClickButtonMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.getFetch();
  };

  render() {
    const { data, total, status } = this.state;

    const Items = data.length ? (
      <>
        <List>
          {data.map(el => (
            <ImageGalleryItem item={el} key={el.id} />
          ))}
        </List>
        {data.length < 12 || total === data.length ? null : (
          <Button onclick={this.handleClickButtonMore} />
        )}
      </>
    ) : (
      <NotFaundPhoto />
    );

    if (status === 'idle') {
      return (
        <LoaderWrapper>
          <TextMassage>Find the photo you need</TextMassage>
        </LoaderWrapper>
      );
    }

    if (status === 'pending') {
      return (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      );
    }
    if (status === 'resolved') {
      return Items;
    }

    if (status === 'rejected') {
      return <Error />;
    }
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  searchName: PropTypes.string.isRequired,
};
