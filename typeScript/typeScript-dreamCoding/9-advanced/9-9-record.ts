type PageInfo = {
  title: string;
};
type Page = 'home' | 'about' | 'contact';

// Page를 키로, PageInfo를 value로 삼는다
const nav: Record<Page, PageInfo> = {
  home: { title: 'Home' },
  about: { title: 'About' },
  contact: { title: 'Contact' }
};

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
