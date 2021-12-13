import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import SearchAppBar from './Components/Nav/Nav';
import Item from './Components/Item/Item';
import Cart from './Components/Cart/Cart';
import SwipableDrawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

import { Wrapper, StyledButton } from './App.styles';


const queryClient = new QueryClient()
  

const Application = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { data, isLoading, error } = useQuery(
    'products', () => 
    fetch('https://fakestoreapi.com/products').then(res =>
       res.json()
  ));

  let newdata = data?.map(item => {
    return {
      ...item,
      price: Math.ceil(item.price * 60)
    }
  })

  console.log(newdata);
  const getTotalItems = (items) =>
    items.reduce((ack, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
      <Wrapper>
        <SearchAppBar 
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
        <SwipableDrawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </SwipableDrawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color='error'>
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
        <Grid container spacing={3}>
          {newdata?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
  );
};

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <Application/>
  </QueryClientProvider>);
}

export default App;