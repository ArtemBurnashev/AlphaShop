import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useContext } from 'react';
import { ShopContext } from '../../context/context';

export default function NativeSelectDemo() {

  const {categoryValue}  = useContext(ShopContext);


  return (
    <Box sx={{ minWidth: 120, maxWidth:230, padding:2 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Category
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange = {(e)=>categoryValue(e.target.value)}
        >
          <option value={'all products'} >All products</option>
          <option value={"men's clothing"}>Men's clothing</option>
          <option value={'jewelery'}>Jewelery</option>
          <option value={'electronics'}>Electronics</option>
          <option value={"women's clothing"}>Women's clothing</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}


