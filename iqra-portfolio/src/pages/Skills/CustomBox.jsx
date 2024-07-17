import { FaHtml5 } from "react-icons/fa6";
import colors from "../../ThemeProvider/colors";
import { Box, IconButton, styled, Typography } from "@mui/material";
function CustomBox({icon:IconComponent,iconName}){

  const CustomBoxContainer = styled(Box)({
    border: `1px solid ${colors.border}`,
    borderRadius: '5px',
    alignItems: 'center',
    marginTop: '15px',
    marginBottom: '15px',
    padding: '20px',
    gap: '10px',
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 calc(25% - 20px)', // 4 items per row
    '@media (max-width: 1200px)': {
      flex: '1 1 calc(33.33% - 20px)' // 3 items per row for medium screens
    },
    '@media (max-width: 900px)': {
      flex: '1 1 calc(50% - 20px)' // 2 items per row for small screens
    },
    '@media (max-width: 600px)': {
      flex: '1 1 100%' // 1 item per row for extra small screens
    },
    transition: 'transform 0.3s ease, border-width 0.3s ease', 
    '&:hover': {
      transform: 'scale(1.05)', 
      borderWidth: '2px', 
      cursor: 'pointer', 
    },
  
  });
return(
    <CustomBoxContainer>
        <IconButton disableRipple sx={{ color: "white", fontSize: "60px",}}>
        <IconComponent />
        </IconButton>
      <Typography sx={{color:"white"}}>
      {iconName}
      </Typography>
      </CustomBoxContainer>
)
}
export default CustomBox;