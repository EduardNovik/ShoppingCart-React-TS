import { Stack } from 'react-bootstrap';
export const AboutItem = () => {
    return (
        <>
            <h1 style={{marginBottom:"60px"}}>About</h1>
            <Stack style={{alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                <img src="../../public/imgs/ShoppingCartPhoto.png" alt="ShoppingCartPhoto" style={{width:"40%"}}/>
                <h4  className="fs-3" style={{width:'35%', textAlign:'left', fontWeight:'300'}}>
                    Welcome to our Shopping Cart App! 
                    Our app, built with React and TypeScript, lets you easily add, remove, and track the total price of your products. 
                    Shop with ease and convenience with our user-friendly design.
                </h4>
            </Stack>
        </>
    );
};

