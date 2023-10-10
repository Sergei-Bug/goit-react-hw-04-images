const KEY = '37747663-1158017a6a7069441e8b1da5b';

export const getFetch = async ({ search, page }) => {
  const params = new URLSearchParams({
    q: search,
    per_page: 12,
    image_type: 'photo',
    page: page,
    orientation: 'horizontal',
  });

  const respons = await fetch(`https://pixabay.com/api/?key=${KEY}&${params}`);

  if (!respons.ok) {
    throw new Error('На жаль, сталась помилка. Спробуйте ще раз.');
  }

  const data = await respons.json();

  return data;
};
