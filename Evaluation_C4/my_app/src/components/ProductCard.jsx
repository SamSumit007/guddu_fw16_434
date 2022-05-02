import { Flex } from './Styled';

export const ProductCard = ({ category, title, brand, id, image, price }) => {
  return (
    <>
      <Flex data-testid='single-product-item' key={id}>
        {/* display item info here  */}
        <h2>{title}</h2>
        <img alt='productImage' src={image}></img>
        <h2 style={{color: 'gray'}}>{brand}</h2>
        <p style={{ fontWeight: 'bold' }}>Price : {price}</p>
      </Flex>
    </>
  );
};
