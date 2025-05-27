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
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        lineHeight: 1.5,
                        mb: 2,
                        flexGrow: 1
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
                    py: 8,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Container maxWidth="lg">
                    <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 3 }}>
                        <Avatar
                            sx={{
                                width: 64,
                                height: 64,
                                bgcolor: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <Architecture sx={{ fontSize: 32 }} />
                        </Avatar>
                        <Box>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontWeight={800}
                                sx={{
                                    letterSpacing: 1,
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                    fontSize: { xs: '2.5rem', md: '3.75rem' }
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
                                    fontWeight: 300
                                }}
                            >
                                Where imagination meets engineering excellence. We bring prototypes to life,
                                merging creative visions with technical expertise.
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {['ENGINEERING', 'PRODUCTION', 'REALIZATION'].map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    fontWeight: 700,
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}
                                variant="outlined"
                            />
                        ))}
                    </Stack>
                </Container>
            </Paper>

            {/* Controls Section */}
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={3}
                        alignItems={{ xs: 'stretch', md: 'center' }}
                    >
                        <TextField
                            fullWidth
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search color="action" />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                            sx={{ flexGrow: 1 }}
                        />

                        <FormControl sx={{ minWidth: 200 }}>
                            <InputLabel>Phase</InputLabel>
                            <Select
                                value={selectedPhase}
                                label="Phase"
                                onChange={(e) => setSelectedPhase(e.target.value)}
                            >
                                {phases.map((phase) => (
                                    <MenuItem key={phase} value={phase}>
                                        {phase}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Paper elevation={1} sx={{ borderRadius: 1, overflow: 'hidden' }}>
                            <Stack direction="row">
                                <Tooltip title="Grid View">
                                    <IconButton
                                        onClick={() => setViewMode('grid')}
                                        color={viewMode === 'grid' ? 'primary' : 'default'}
                                        sx={{
                                            borderRadius: 0,
                                            bgcolor: viewMode === 'grid' ? 'action.selected' : 'transparent'
                                        }}
                                    >
                                        <ViewModule />
                                    </IconButton>
                                </Tooltip>
                                <Divider orientation="vertical" flexItem />
                                <Tooltip title="List View">
                                    <IconButton
                                        onClick={() => setViewMode('list')}
                                        color={viewMode === 'list' ? 'primary' : 'default'}
                                        sx={{
                                            borderRadius: 0,
                                            bgcolor: viewMode === 'list' ? 'action.selected' : 'transparent'
                                        }}
                                    >
                                        <ViewList />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                        </Paper>
                    </Stack>
                </Paper>

                {/* Results Summary */}
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                    Showing <strong>{filteredProjects.length}</strong> projects
                    {selectedPhase !== 'All Phases' && (
                        <span> in <strong>{selectedPhase}</strong> phase</span>
                    )}
                </Typography>

                {/* Projects Grid */}

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {filteredProjects.map((project) => (
                        <Grid key={project.id} size={{ xs: 2, sm: 4 }}>
                            <ProjectCard project={project} isListView={viewMode === 'list'} />
                        </Grid>
                    ))}
                </Grid>


                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <Paper
                        elevation={1}
                        sx={{
                            textAlign: 'center',
                            py: 8,
                            px: 4,
                            borderRadius: 2
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                bgcolor: 'action.hover',
                                color: 'text.secondary',
                                mx: 'auto',
                                mb: 3
                            }}
                        >
                            <FilterList sx={{ fontSize: 40 }} />
                        </Avatar>
                        <Typography variant="h5" color="text.primary" gutterBottom fontWeight={600}>
                            No projects found matching your criteria
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Try adjusting your search or filter settings to discover more projects
                        </Typography>
                    </Paper>
                )}
            </Container>
        </Box>
    );
}