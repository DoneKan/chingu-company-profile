import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
  Avatar,
  Paper
} from '@mui/material';

// Mock images - in a real app, you'd import actual images
const placeholderImage = "/api/placeholder/800/500";
const teamMember1 = "/api/placeholder/300/300";
const teamMember2 = "/api/placeholder/300/300";
const teamMember3 = "/api/placeholder/300/300";
const blogImage1 = "/api/placeholder/400/300";
const blogImage2 = "/api/placeholder/400/300";
const blogImage3 = "/api/placeholder/400/300";
const testimonialAvatar1 = "/api/placeholder/80/80";
const testimonialAvatar2 = "/api/placeholder/80/80";
const testimonialAvatar3 = "/api/placeholder/80/80";

export default function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: '#2c3e50', 
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="overline" sx={{ letterSpacing: 2, fontWeight: 'bold' }}>
                WHO WE ARE
              </Typography>
              <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                ABOUT US
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', maxWidth: '90%' }}>
                We are a passionate team dedicated to creating exceptional experiences and innovative solutions. 
                With years of expertise and a commitment to excellence, we transform ideas into reality.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: '#e74c3c', 
                  px: 4, 
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#c0392b'
                  }
                }}
              >
                LEARN MORE
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', boxShadow: 10 }}>
                <img 
                  src={placeholderImage} 
                  alt="About Us" 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    transform: 'scale(1.03)',
                    transition: 'transform 0.5s ease'
                  }} 
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Mission Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', boxShadow: 5 }}>
              <img 
                src={placeholderImage} 
                alt="Our Mission" 
                style={{ 
                  width: '100%', 
                  height: 'auto'
                }} 
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: '#e74c3c', fontWeight: 'bold', letterSpacing: 2 }}>
              OUR MISSION
            </Typography>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              We're on a mission to transform industries
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Our mission is to provide innovative solutions that empower businesses to thrive in a digital world. 
              We believe in creating meaningful impact through technology and design.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              With a focus on sustainability and forward-thinking approaches, we aim to set new standards in our industry
              while maintaining our core values of integrity, excellence, and customer satisfaction.
            </Typography>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                borderColor: '#e74c3c', 
                color: '#e74c3c',
                px: 3,
                '&:hover': {
                  borderColor: '#c0392b',
                  bgcolor: 'rgba(231, 76, 60, 0.08)'
                }
              }}
            >
              READ MORE
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Our Team Section */}
      <Box sx={{ bgcolor: '#ecf0f1', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#e74c3c', fontWeight: 'bold', letterSpacing: 2 }}>
              MEET THE EXPERTS
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Our Team
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto' }}>
              Our talented team brings together diverse skills and expertise to deliver exceptional results.
              Each member is committed to excellence and innovation in everything we do.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {/* Team Member 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8
                }
              }}>
                <CardMedia
                  component="img"
                  height="280"
                  image={teamMember1}
                  alt="Team Member"
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                    Sarah Johnson
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#e74c3c', mb: 1 }}>
                    CEO & Founder
                  </Typography>
                  <Typography variant="body2">
                    With over 15 years of industry experience, Sarah leads our team with vision and expertise.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Team Member 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8
                }
              }}>
                <CardMedia
                  component="img"
                  height="280"
                  image={teamMember2}
                  alt="Team Member"
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                    Michael Chen
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#e74c3c', mb: 1 }}>
                    Creative Director
                  </Typography>
                  <Typography variant="body2">
                    Michael's creative vision and design expertise help shape our innovative solutions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Team Member 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8
                }
              }}>
                <CardMedia
                  component="img"
                  height="280"
                  image={teamMember3}
                  alt="Team Member"
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                    Alex Rivera
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#e74c3c', mb: 1 }}>
                    Tech Lead
                  </Typography>
                  <Typography variant="body2">
                    Alex brings technical excellence and innovation to every project we undertake.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: '#e74c3c', 
                px: 4, 
                py: 1.5,
                '&:hover': {
                  bgcolor: '#c0392b'
                }
              }}
            >
              VIEW ALL TEAM
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: '#e74c3c', fontWeight: 'bold', letterSpacing: 2 }}>
            WHAT PEOPLE SAY
          </Typography>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Client Testimonials
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto' }}>
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {/* Testimonial 1 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%',
              boxShadow: 3,
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '5px',
                height: '100%',
                backgroundColor: '#e74c3c'
              }
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
                  "Working with this team was a game-changer for our business. Their innovative solutions and attention to detail exceeded our expectations."
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    src={testimonialAvatar1} 
                    alt="Client"
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      Jennifer Williams
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Marketing Director, TechCorp
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Testimonial 2 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%',
              boxShadow: 3,
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '5px',
                height: '100%',
                backgroundColor: '#e74c3c'
              }
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
                  "Their team's expertise and dedication transformed our project from good to exceptional. They truly understand our vision and how to execute it perfectly."
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    src={testimonialAvatar2} 
                    alt="Client"
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      Robert Martinez
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      CEO, Innovate Inc.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Testimonial 3 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%',
              boxShadow: 3,
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '5px',
                height: '100%',
                backgroundColor: '#e74c3c'
              }
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
                  "The level of professionalism and creativity they bring to the table is unmatched. Our partnership has been instrumental in our growth."
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    src={testimonialAvatar3} 
                    alt="Client"
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      Emily Thompson
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Product Manager, NextLevel
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Company History Section */}
      <Box sx={{ bgcolor: '#2c3e50', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#e74c3c', fontWeight: 'bold', letterSpacing: 2 }}>
              OUR JOURNEY
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>
              Our History
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto', color: '#ecf0f1' }}>
              From humble beginnings to industry leadership, our journey has been defined by innovation and excellence.
            </Typography>
          </Box>
          
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', mb: 1 }}>
                  2012
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  The Beginning
                </Typography>
                <Typography variant="body1" sx={{ color: '#ecf0f1' }}>
                  Founded with a vision to revolutionize the industry, we started with a small team of passionate innovators.
                </Typography>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', mb: 1 }}>
                  2016
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Expansion Phase
                </Typography>
                <Typography variant="body1" sx={{ color: '#ecf0f1' }}>
                  After initial success, we expanded our team and services to meet growing client demands.
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold', mb: 1 }}>
                  2021
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Industry Leadership
                </Typography>
                <Typography variant="body1" sx={{ color: '#ecf0f1' }}>
                  Today, we're recognized as industry leaders, setting standards and shaping the future.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: 10
                }}
              >
                <img 
                  src={placeholderImage} 
                  alt="Company History" 
                  style={{ 
                    width: '100%', 
                    height: 'auto'
                  }} 
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Blog Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: '#e74c3c', fontWeight: 'bold', letterSpacing: 2 }}>
            INSIGHTS & NEWS
          </Typography>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Latest Blog Posts
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto' }}>
            Stay updated with our latest insights, industry trends, and company news.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {/* Blog Post 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}>
              <CardMedia
                component="img"
                height="200"
                image={blogImage1}
                alt="Blog Post"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="caption" sx={{ color: '#7f8c8d', display: 'block', mb: 1 }}>
                  MAY 10, 2025
                </Typography>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Innovation in Digital Transformation
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Discover how businesses are leveraging digital transformation to stay competitive in today's market.
                </Typography>
                <Button 
                  sx={{ 
                    color: '#e74c3c',
                    p: 0,
                    '&:hover': {
                      background: 'none',
                      color: '#c0392b'
                    }
                  }}
                >
                  READ MORE →
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Blog Post 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}>
              <CardMedia
                component="img"
                height="200"
                image={blogImage2}
                alt="Blog Post"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="caption" sx={{ color: '#7f8c8d', display: 'block', mb: 1 }}>
                  MAY 5, 2025
                </Typography>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                  The Future of Sustainable Design
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  How sustainable practices are reshaping design processes and creating positive impact.
                </Typography>
                <Button 
                  sx={{ 
                    color: '#e74c3c',
                    p: 0,
                    '&:hover': {
                      background: 'none',
                      color: '#c0392b'
                    }
                  }}
                >
                  READ MORE →
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Blog Post 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}>
              <CardMedia
                component="img"
                height="200"
                image={blogImage3}
                alt="Blog Post"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="caption" sx={{ color: '#7f8c8d', display: 'block', mb: 1 }}>
                  APRIL 28, 2025
                </Typography>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Building High-Performance Teams
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Strategies for creating collaborative and effective teams that drive business success.
                </Typography>
                <Button 
                  sx={{ 
                    color: '#e74c3c',
                    p: 0,
                    '&:hover': {
                      background: 'none',
                      color: '#c0392b'
                    }
                  }}
                >
                  READ MORE →
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            variant="outlined" 
            size="large"
            sx={{ 
              borderColor: '#e74c3c', 
              color: '#e74c3c',
              px: 4,
              '&:hover': {
                borderColor: '#c0392b',
                bgcolor: 'rgba(231, 76, 60, 0.08)'
              }
            }}
          >
            VIEW ALL POSTS
          </Button>
        </Box>
      </Container>
      
      {/* Contact CTA Section */}
      <Box sx={{ bgcolor: '#e74c3c', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', maxWidth: '700px', mx: 'auto' }}>
              Contact us today to discuss how we can help your business grow and succeed. Our team is ready to provide the solutions you need.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: 'white', 
                color: '#e74c3c',
                px: 4, 
                py: 1.5,
                '&:hover': {
                  bgcolor: '#ecf0f1'
                }
              }}
            >
              CONTACT US
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}