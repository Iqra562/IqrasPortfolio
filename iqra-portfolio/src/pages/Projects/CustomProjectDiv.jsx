import React from "react";
import { Box, Card, CardContent, CardMedia, colors, IconButton, Link, styled, Typography } from "@mui/material";
import { HiLink } from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
import { ProjectData } from "./ProjectData";

function CustomProjectDiv({data}) {
const {name,description,githubLink,liveLink,image,technologyUsed} =data
    const StyledCard = styled(Box)({
        position: "relative",
        width: "100%",
        // height:"1200px",
        borderRadius: "3px",
        overflow: "hidden",
        "&:hover .overlay": {
            opacity: 0.9
        }


    })

    const CardOverlay = styled(Box)({
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#000",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0,
        transition: "opacity 0.9s ease"
    })

    const ProjectContainer = styled(Box)(({ theme }) => ({

        border: `1px solid #1c1c1c`,
        borderRadius: "7px",
        width: '100%',
        backgroundColor: "#0a0a0a",
        padding: "20px",
        display:"flex",
     

    }))

    const BoxStack = styled(Box)({
        // backgroundColor: "#272626",
        // fontWeight: "bold",
        display: "inline-block",
        paddingTop: "3px", paddingBottom: "3px",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginLeft:"4px",
        justifyContent: "center",
        borderRadius: "5px",
        fontSize: "14px",
        boxShadow:"1px 1px 6px #1f1e1e"
    })
    return (
        <ProjectContainer >
            <Card sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                    md: 'row',
                    lg: 'row',
                },
                gap: '20px',
                backgroundColor: 'inherit',
                boxShadow: 'none',
            }}>


                <StyledCard>
                    <CardMedia
                        component="img"
                        height="200"
                        image={image}
                        alt="Blog Portal"
                        style={{
                            width:"100%",
                            height: "100%",
                            backgroundPosition:"center",
                            objectFit: "cover"
                        }}
                    />
                    <CardOverlay className="overlay">
                        <IconButton
                            component="a"
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            disableRipple={true}
                        >
                            <HiLink style={{ color: "#979191" }} />
                        </IconButton>
                    </CardOverlay>


                </StyledCard>

                <CardContent sx={{
                    color: "white",
                    padding: 0,
                    width: "100%",

                }}>
                    <Box sx={{ display: "flex" }}>

                        <Typography variant="h5">
                            <Link
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                {name}
                            </Link>

                        </Typography>
                        <IconButton
                            component="a"
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            disableRipple={true}
                            sx={{ marginTop: "-5px" }}

                        >
                            <IoIosGitBranch fontSize="large" style={{ color: "#979191" }} />
                        </IconButton>
                    </Box>
                    <Typography  sx={{
                        color: "#a3a3a3",
                        fontSize: "16px",
                        marginTop:"10px"
                    }}>
                       {description}
                    </Typography>

                    <Box>
 <Typography sx={{marginTop:"10px",fontSize:"15px",color:"#979191"}}>
    Tech Stack:
 </Typography>

                    <Box sx={{ display: "flex", gap: "2px", flexWrap: "wrap",marginTop:"5px" }}>
                      
                        {
                            technologyUsed.map((item,index)=>(
                                <BoxStack key={index}>{item}</BoxStack>
                                
                            ))
                        }
                        </Box>
                        

                    </Box>
                </CardContent>
            </Card>




        </ProjectContainer>

    )
}
export default CustomProjectDiv;