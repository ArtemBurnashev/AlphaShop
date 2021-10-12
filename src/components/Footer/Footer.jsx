import { Container } from "@mui/material";

const Footer = ()=>{
    return(
        <footer className="footer" style={{
            
        height:'50px', 
        backgroundColor:'#222',
        position:'relative'}}>
            <Container style={{maxWidth:'1200px'}}>
            <div className='company' style={{
                color:'#fff', 
                fontWeight:'500',
                position:'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(-50%, -50%)',
                fontSize:'14px'
            
                }}>
            © {new Date().getFullYear()}  AlphaShop
             </div>
            </Container>
        

        </footer>
    );

}
export default Footer;