import React, { useState, useMemo, useCallback } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Grid,
    Container,
    TextField,
    InputAdornment,
    Paper,
    Stack,
    Avatar,
    Divider,
    IconButton,
    Tooltip,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Skeleton
} from '@mui/material';
import {
    Search,
    Architecture,
    ViewModule,
    ViewList,
    Schedule,
    SquareFoot,
    Business,
    School,
    LocalHospital,
    Home,
    AccountBalance,
    FilterList
} from '@mui/icons-material';
import { TrendingUp } from 'lucide-react';

// Project data with proper MUI structure
const projectData = [
    {
        id: 1,
        title: "Modern Residential Complex",
        description: "Sustainable housing development with innovative green building techniques and smart home integration.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop&auto=format",
        category: "Residential",
        phase: "Construction",
        tags: ["Sustainability", "Smart Home", "Modern Design"],
        timeline: "18 months",
        area: "15,000 sq ft",
        status: "active",
        icon: Home
    },
    {
        id: 2,
        title: "Corporate Headquarters",
        description: "State-of-the-art office building featuring biophilic design principles and collaborative workspaces.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop&auto=format",
        category: "Commercial",
        phase: "Design Development",
        tags: ["Biophilic", "Collaborative", "Corporate"],
        timeline: "24 months",
        area: "45,000 sq ft",
        status: "planning",
        icon: Business
    },
    {
        id: 3,
        title: "Cultural Arts Center",
        description: "Multi-purpose venue combining traditional architectural elements with contemporary performance spaces.",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&h=300&fit=crop&auto=format",
        category: "Cultural",
        phase: "Schematic Design",
        tags: ["Cultural", "Performance", "Heritage"],
        timeline: "30 months",
        area: "25,000 sq ft",
        status: "design",
        icon: AccountBalance
    },
    {
        id: 4,
        title: "Urban Mixed-Use Development",
        description: "Integrated community space featuring retail, residential, and public amenities in dense urban setting.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop&auto=format",
        category: "Mixed-Use",
        phase: "Construction Documents",
        tags: ["Urban", "Mixed-Use", "Community"],
        timeline: "36 months",
        area: "80,000 sq ft",
        status: "documentation",
        icon: Business
    },
    {
        id: 5,
        title: "Educational Campus Expansion",
        description: "Learning-focused environments with flexible spaces designed for future pedagogical evolution.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop&auto=format",
        category: "Educational",
        phase: "Programming",
        tags: ["Education", "Flexible", "Future-Ready"],
        timeline: "28 months",
        area: "35,000 sq ft",
        status: "research",
        icon: School
    },
    {
        id: 6,
        title: "Healthcare Innovation Hub",
        description: "Healing-centered design integrating advanced medical technology with patient-focused environments.",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&h=300&fit=crop&auto=format",
        category: "Healthcare",
        phase: "Post-Occupancy",
        tags: ["Healthcare", "Innovation", "Healing"],
        timeline: "22 months",
        area: "55,000 sq ft",
        status: "completed",
        icon: LocalHospital
    }
];

const phases = ["All Phases", "Programming", "Schematic Design", "Design Development", "Construction Documents", "Construction", "Post-Occupancy"];

const phaseColors = {
    'Programming': { color: 'info', variant: 'outlined' },
    'Schematic Design': { color: 'primary', variant: 'filled' },
    'Design Development': { color: 'secondary', variant: 'outlined' },
    'Construction Documents': { color: 'warning', variant: 'filled' },
    'Construction': { color: 'error', variant: 'filled' },
    'Post-Occupancy': { color: 'success', variant: 'filled' }
};

const ProjectCard = React.memo(({ project, isListView = false }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const IconComponent = project.icon;
    const phaseStyle = phaseColors[project.phase] || { color: 'default', variant: 'outlined' };

    const handleImageLoad = useCallback(() => {
        setImageLoaded(true);
    }, []);

    const handleImageError = useCallback(() => {
        setImageError(true);
        setImageLoaded(true);
    }, []);

    return (
        <Card
            elevation={3}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: isListView ? { xs: 'column', md: 'row' } : 'column',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: 2,
                overflow: 'hidden',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => theme.shadows[8],
                }
            }}
        >
            <Box sx={{
                position: 'relative',
                width: isListView ? { xs: '100%', md: 300 } : '100%',
                height: isListView ? { xs: 200, md: 200 } : 240,
                overflow: 'hidden'
            }}>
                {/* Image skeleton while loading */}
                {!imageLoaded && (
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="100%"
                        animation="wave"
                        sx={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                    />
                )}

                {/* Actual image */}
                {!imageError && (
                    <CardMedia
                        component="img"
                        height="100%"
                        image={project.image}
                        alt={project.title}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        sx={{
                            objectFit: 'cover',
                            opacity: imageLoaded ? 1 : 0,
                            transition: 'all 0.5s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.02)'
                            }
                        }}
                    />
                )}

                {/* Error fallback */}
                {imageError && (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'grey.100',
                            color: 'grey.500'
                        }}
                    >
                        <Architecture sx={{ fontSize: 48 }} />
                    </Box>
                )}

                {/* Phase chip */}
                <Chip
                    label={project.phase}
                    color={phaseStyle.color}
                    variant={phaseStyle.variant}
                    size="small"
                    sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        fontWeight: 600,
                        backdropFilter: 'blur(8px)',
                        zIndex: 2
                    }}
                />

                {/* Category icon */}
                <Avatar
                    sx={{
                        position: 'absolute',
                        bottom: 12,
                        left: 12,
                        bgcolor: 'rgba(255, 255, 255, 0.95)',
                        color: 'primary.main',
                        width: 40,
                        height: 40,
                        zIndex: 2,
                        boxShadow: 2
                    }}
                >
                    <IconComponent fontSize="small" />
                </Avatar>
            </Box>

            <CardContent sx={{
                flexGrow: 1,
                p: 3,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        lineHeight: 1.3,
                        mb: 1
                    }}
                >
                    {project.title}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: { xs: 2, md: 3 }, // Fewer lines on mobile
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        lineHeight: 1.4,
                        mb: 2,
                        flexGrow: 1,
                        fontSize: { xs: '0.8rem', md: '0.875rem' } // Smaller text on mobile
                    }}
                >
                    {project.description}
                </Typography>


                <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    {project.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{
                                fontSize: '0.75rem',
                                height: 24
                            }}
                        />
                    ))}
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Schedule fontSize="small" color="action" />
                            <Box>
                                <Typography variant="caption" color="text.secondary" display="block">
                                    Timeline
                                </Typography>
                                <Typography variant="body2" fontWeight={600}>
                                    {project.timeline}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <SquareFoot fontSize="small" color="action" />
                            <Box>
                                <Typography variant="caption" color="text.secondary" display="block">
                                    Area
                                </Typography>
                                <Typography variant="body2" fontWeight={600}>
                                    {project.area}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
});

ProjectCard.displayName = 'ProjectCard';

export default function OptimizedProjectShowcase() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPhase, setSelectedPhase] = useState('All Phases');
    const [viewMode, setViewMode] = useState('grid');

    // Memoized filtered projects
    const filteredProjects = useMemo(() => {
        return projectData.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesPhase = selectedPhase === 'All Phases' || project.phase === selectedPhase;

            return matchesSearch && matchesPhase;
        });
    }, [searchTerm, selectedPhase]);

    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
            {/* Header Section */}
            <Paper
                elevation={0}
                sx={{
                    background: 'linear-gradient(135deg, #1e293b 0%, #7c3aed 50%, #1e293b 100%)',
                    color: 'white',
                    py: { xs: 4, md: 8 }, // Reduced padding on mobile
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, px: { xs: 1, md: 3 } }}>
                    {/* Better mobile padding */}
                    <Stack
                        direction={{ xs: 'column', md: 'row' }} // Stack vertically on mobile
                        alignItems={{ xs: 'center', md: 'flex-start' }}
                        spacing={{ xs: 2, md: 3 }}
                        sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' } }} // Center on mobile
                    >
                        <Avatar
                            sx={{
                                width: { xs: 48, md: 64 }, // Smaller on mobile
                                height: { xs: 48, md: 64 },
                                bgcolor: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <Architecture sx={{ fontSize: { xs: 24, md: 32 } }} />
                        </Avatar>
                        <Box>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontWeight={800}
                                sx={{
                                    letterSpacing: 1,
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.75rem' } // Much smaller on mobile
                                }}
                            >
                                CHINGU TRANSCENDENCE
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    opacity: 0.9,
                                    maxWidth: 700,
                                    mt: 1,
                                    fontWeight: 300,
                                    fontSize: { xs: '0.9rem', md: '1.25rem' }, // Smaller on mobile
                                    px: { xs: 1, md: 0 } // Small padding on mobile
                                }}
                            >
                                Where imagination meets engineering excellence. We bring prototypes to life,
                                merging creative visions with technical expertise.
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            flexWrap: 'wrap',
                            gap: 1,
                            justifyContent: { xs: 'center', md: 'flex-start' } // Center on mobile
                        }}
                    >
                        {['ENGINEERING', 'PRODUCTION', 'REALIZATION'].map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                size="small" // Fixed: use string instead of object
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    fontWeight: 700,
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    fontSize: { xs: '0.7rem', md: '0.8rem' }
                                }}
                                variant="outlined"
                            />
                        ))}
                    </Stack>
                </Container>
            </Paper>



            {/* Controls Section */}
            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* Modern Filter Bar */}
                <Box sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: { xs: 2, md: 4 }, // Less rounded on mobile
                    p: { xs: 2, md: 4 }, // Less padding on mobile
                    mb: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    mx: { xs: 1, md: 0 }, // Small margin on mobile
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                    }
                }}>
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: 'white',
                                fontWeight: 700,
                                mb: 1,
                                fontSize: { xs: '1.5rem', md: '2.125rem' }, // Smaller on mobile
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            Project Dashboard
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255,255,255,0.8)',
                                mb: { xs: 3, md: 4 },
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            Discover and manage your project portfolio
                        </Typography>

                        <Stack
                            direction="column" // Always stack vertically on mobile
                            spacing={2}
                            alignItems="stretch"
                        >
                            {/* Enhanced Search */}
                            <TextField
                                fullWidth
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                size="small" // Fixed: use string instead of object
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search sx={{ color: 'rgba(0,0,0,0.6)', fontSize: { xs: 20, md: 24 } }} />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: 'rgba(255,255,255,0.95)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: { xs: 2, md: 3 },
                                        fontSize: { xs: '0.9rem', md: '1rem' },
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,1)',
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: 'rgba(255,255,255,1)',
                                        }
                                    }
                                }}
                            />

                            <Stack direction="row" spacing={2} alignItems="center">
                                {/* Phase Filter */}
                                <FormControl sx={{ flex: 1, minWidth: 120 }}>
                                    <Select
                                        value={selectedPhase}
                                        onChange={(e) => setSelectedPhase(e.target.value)}
                                        size="small" // Always small on mobile
                                        sx={{
                                            backgroundColor: 'rgba(255,255,255,0.95)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: 2,
                                            fontSize: '0.9rem',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255,255,255,1)',
                                            },
                                            '&.Mui-focused': {
                                                backgroundColor: 'rgba(255,255,255,1)',
                                            }
                                        }}
                                    >
                                        {phases.map((phase) => (
                                            <MenuItem key={phase} value={phase} sx={{ fontSize: '0.9rem' }}>
                                                {phase}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                {/* View Toggle - Compact for mobile */}
                                <Box sx={{
                                    backgroundColor: 'rgba(255,255,255,0.95)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 2,
                                    p: 0.5,
                                    display: 'flex'
                                }}>
                                    <IconButton
                                        size="small"
                                        onClick={() => setViewMode('grid')}
                                        sx={{
                                            borderRadius: 1,
                                            backgroundColor: viewMode === 'grid' ? 'primary.main' : 'transparent',
                                            color: viewMode === 'grid' ? 'white' : 'text.primary',
                                        }}
                                    >
                                        <ViewModule fontSize="small" />
                                    </IconButton>
                                    <IconButton
                                        size="small"
                                        onClick={() => setViewMode('list')}
                                        sx={{
                                            borderRadius: 1,
                                            backgroundColor: viewMode === 'list' ? 'primary.main' : 'transparent',
                                            color: viewMode === 'list' ? 'white' : 'text.primary',
                                        }}
                                    >
                                        <ViewList fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>

                {/* Enhanced Results Summary */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 4,
                    p: 3,
                    backgroundColor: 'grey.50',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'grey.200'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                            {filteredProjects.length} Projects Found
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {selectedPhase !== 'All Phases' && (
                                <>Filtered by <Chip label={selectedPhase} size="small" color="primary" sx={{ ml: 0.5 }} /></>
                            )}
                            {selectedPhase === 'All Phases' && 'Showing all projects'}
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={1}>
                        <Chip
                            icon={<TrendingUp sx={{ fontSize: 16 }} />}
                            label="Active"
                            variant="outlined"
                            size="small"
                            color="success"
                        />
                        <Chip
                            label={`${viewMode} view`}
                            variant="outlined"
                            size="small"
                        />
                    </Stack>
                </Box>

                {/* Projects Grid with enhanced styling */}
                <Grid container spacing={{ xs: 2, md: 3 }}  columns={{ xs: 4, sm: 8, md: 12 }}>
                    {filteredProjects.map((project) => (
                        <Grid key={project.id} size={{ sm: 4 }}>
                            <Box sx={{
                                position: 'relative',
                                height: '100%',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    transition: 'transform 0.3s ease-in-out'
                                }
                            }}>
                                <ProjectCard project={project} isListView={viewMode === 'list'} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>


                {/* Enhanced Empty State */}
                {filteredProjects.length === 0 && (
                    <Box sx={{
                        textAlign: 'center',
                        py: 12,
                        px: 4,
                    }}>
                        <Box sx={{
                            width: 120,
                            height: 120,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 4,
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                opacity: 0.3,
                                transform: 'scale(1.2)',
                                animation: 'pulse 2s infinite'
                            }
                        }}>
                            <FilterList sx={{ fontSize: 48, color: 'white', zIndex: 1 }} />
                        </Box>

                        <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
                            No projects match your search
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 500, mx: 'auto' }}>
                            We couldn't find any projects matching your current filters. Try broadening your search criteria or exploring different project phases.
                        </Typography>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                            <Button
                                variant="outlined"
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedPhase('All Phases');
                                }}
                                sx={{ borderRadius: 2 }}
                            >
                                Clear Filters
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: 2,
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                }}
                            >
                                Browse All Projects
                            </Button>
                        </Stack>
                    </Box>
                )}
            </Container>
        </Box>
    );
}