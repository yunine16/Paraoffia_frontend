import type { NextPage, InferGetStaticPropsType } from 'next'
import {
  Box,
  Typography,
  TextField,
  FormControl,
  MenuItem,
  Select, 
  InputLabel
} from "@mui/material"

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const { CharacterState } = await 
}

const CharacterSheet: NextPage<Props> = (props) => {
  return (
    <>
      <Box sx={{ width: '75%', margin: 'auto', p: 2, mt: 3, backgroundColor: 'black' }}>
        <Typography variant="h1" component="h1" sx={{ color: 'white', fontWeight: 'bold' }}>
          PARANOIA
        </Typography>
        <Typography variant="h3" component="p" sx={{ color: 'white', fontWeight: 'bold' }}>
          キャラクターシート
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography component="p">トラブルシューター名</Typography>
        <TextField id="shooter-name" label="名前"></TextField>
        -
        <FormControl>
          <InputLabel id="clearance-label">クリアランス</InputLabel>
          {/* <Select
            labelId="clearance-label"
            id="clearance"
            value={clearance}
          >
            <MenuItem value={IR}>IR</MenuItem>
            <MenuItem value={R}>R</MenuItem>
            <MenuItem value={O}>O</MenuItem>
            <MenuItem value={Y}>Y</MenuItem>
            <MenuItem value={G}>G</MenuItem>
            <MenuItem value={B}>B</MenuItem>
            <MenuItem value={I}>I</MenuItem>
            <MenuItem value={V}>V</MenuItem>
            <MenuItem value={UV}>UV</MenuItem>
          </Select> */}
        </FormControl>
      </Box>
    </>
  )
}

export default CharacterSheet