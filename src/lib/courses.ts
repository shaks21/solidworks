export interface Course {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  level: string;
  topics: string[];
  icon: string;
}

export const courses: Course[] = [
  {
    slug: 'solidworks-essentials',
    title: 'SOLIDWORKS Essentials',
    description: 'Master the fundamentals of SOLIDWORKS 3D CAD software. Learn the core concepts of parametric modeling and build a strong foundation for advanced techniques.',
    longDescription: 'SOLIDWORKS Essentials is the perfect starting point for anyone new to 3D CAD design. This course introduces the fundamental tools and workflows required to design parts, build assemblies, and create engineering drawings in SOLIDWORKS. It covers the core principles of parametric modelling, including sketching, feature creation, design intent, and model editing. Participants will learn how to build robust 3D models, assemble components using mates, and produce professional 2D drawings suitable for manufacturing documentation.',
    duration: '4 Days',
    level: 'Beginner',
    icon: '🎯',
    topics: [
      'SOLIDWORKS interface and navigation',
      'Creating and modifying sketches',
      'Part modeling with extrude and revolve features',
      'Applying fillets, chamfers, and shells',
      'Creating and managing assemblies',
      'Basic drawing creation',
      'Design intent and parametric modeling',
      'Best practices for efficient design workflow'
    ]
  },
  {
    slug: 'advanced-part',
    title: 'Advanced Part',
    description: 'Take your modeling skills to the next level with advanced techniques including complex shapes, sweeps, lofts, and multi-body parts.',
    longDescription: 'The Advanced Part course focuses on more sophisticated modelling techniques used to create complex and highly parametric parts. It covers advanced sketching methods, sweeps, lofts, boundary features, and multi-body modelling. Participants will also learn how to control designs using equations, global variables, and configurations to create flexible models that can easily adapt to design changes.',
    duration: '3 Days',
    level: 'Intermediate',
    icon: '🔧',
    topics: [
      'Advanced sweep and loft techniques',
      'Multi-body modeling',
      'Complex fillets and variable radius fillets',
      'Advanced patterning and mirroring',
      'Master model techniques',
      'Using equations and global variables',
      'Advanced sketch techniques',
      'Troubleshooting and repair strategies'
    ]
  },
  {
    slug: 'assembly-modeling',
    title: 'Assembly Modeling',
    description: 'Learn to create and manage complex assemblies with proper mates, constraints, and assembly-level features for real-world mechanical designs.',
    longDescription: 'This course teaches the techniques required to build and manage assemblies efficiently in SOLIDWORKS. It covers inserting and positioning components, applying mates to control movement, creating sub-assemblies, and managing large assembly structures. Participants will also learn how to analyse assemblies, create exploded views, and generate assembly drawings with bill of materials.',
    duration: '3 Days',
    level: 'Intermediate',
    icon: '⚙️',
    topics: [
      'Advanced mate techniques and strategies',
      'Assembly structure and organization',
      'In-context design and top-down modeling',
      'Large assembly management techniques',
      'Assembly features and component patterns',
      'Interference detection and clearance verification',
      'Virtual components and envelopes',
      'Assembly configurations and variations'
    ]
  },
  {
    slug: 'drawing',
    title: 'SOLIDWORKS Drawings',
    description: 'Create professional technical drawings with proper views, dimensions, annotations, and bills of materials following industry standards.',
    longDescription: 'The Drawing course focuses on producing clear and accurate engineering drawings from SOLIDWORKS models. It covers drawing templates, standard views, section views, detail views, dimensions, annotations, and bill of materials. Participants will learn how to create professional technical documentation that communicates design intent and manufacturing information effectively.',
    duration: '3 Days',
    level: 'Beginner',
    icon: '📐',
    topics: [
      'Creating standard drawing views',
      'Section, detail, and auxiliary views',
      'Dimensioning best practices',
      'Geometric Dimensioning and Tolerancing (GD&T)',
      'Annotations and notes',
      'Bill of Materials creation and customization',
      'Drawing templates and sheet formats',
      'Revision management and drawing standards'
    ]
  },
  {
    slug: 'sheet-metal',
    title: 'Sheet Metal Design',
    description: 'Design sheet metal parts with proper bends, flanges, and flat patterns for manufacturing. Learn industry-standard sheet metal workflows.',
    longDescription: 'This course introduces the tools used to design sheet metal components in SOLIDWORKS. It covers creating base flanges, edge flanges, bends, hems, and forming features while maintaining correct sheet metal parameters. Participants will also learn how to generate flat patterns and create manufacturing drawings suitable for sheet metal fabrication.',
    duration: '2 Days',
    level: 'Intermediate',
    icon: '🛠️',
    topics: [
      'Sheet metal base flange creation',
      'Edge flanges, miter flanges, and tabs',
      'Bends, hems, and jogs',
      'Sheet metal forming tools',
      'Flat pattern creation and export',
      'K-factor and bend allowance calculations',
      'Sheet metal drawings and BOMs',
      'Design for manufacturability'
    ]
  },
  {
    slug: 'weldments',
    title: 'Weldments',
    description: 'Design welded structures using structural members, gussets, end caps, and proper weld bead representations for fabrication.',
    longDescription: 'The Weldments course focuses on designing structural frames and welded assemblies using SOLIDWORKS weldment tools. It covers creating structural members, managing corner treatments, adding gussets and weld beads, and generating automatic cut lists. Participants will also learn how to produce weldment drawings and documentation for fabrication.',
    duration: '2 Days',
    level: 'Intermediate',
    icon: '🏗️',
    topics: [
      'Structural member creation and management',
      'Custom weldment profiles',
      'Gussets, end caps, and weld beads',
      'Trim and extend structural members',
      'Weldment cut lists',
      '3D sketching for frames',
      'Weldment drawings and detailing',
      'Custom properties and BOMs'
    ]
  },
  {
    slug: 'surface-modeling',
    title: 'Surface Modeling',
    description: 'Create complex organic shapes and surfaces for consumer products, automotive, and industrial design applications.',
    longDescription: 'This advanced course introduces surface modelling techniques used to create complex geometry that cannot easily be produced using standard solid features. It covers creating surfaces, editing and trimming surfaces, repairing imported geometry, and converting surface models into solid bodies. Participants will gain the skills needed to design complex shapes and refine difficult geometry.',
    duration: '2 Days',
    level: 'Advanced',
    icon: '✨',
    topics: [
      'Surface creation fundamentals',
      'Complex surface modeling techniques',
      'Surface trimming and knitting',
      'Converting surfaces to solids',
      'Curves and 3D sketches for surfaces',
      'Surface analysis and repair',
      'Organic shape modeling',
      'Hybrid modeling techniques'
    ]
  },
  {
    slug: 'mold-tools',
    title: 'Mold Tools',
    description: 'Design injection molds with proper parting lines, cores, cavities, and mold base components for plastic part production.',
    longDescription: 'The Mould Tools course focuses on preparing plastic parts for mould manufacturing using SOLIDWORKS. It covers draft analysis, identifying undercuts, defining parting lines, creating shut-off and parting surfaces, and splitting parts into core and cavity bodies. Participants will learn how to evaluate plastic part designs and prepare models for mould tooling production.',
    duration: '2 Days',
    level: 'Advanced',
    icon: '🏭',
    topics: [
      'Plastic part analysis and draft checking',
      'Parting line and parting surface creation',
      'Core and cavity design',
      'Mold base selection and customization',
      'Ejector systems and mechanisms',
      'Cooling channel design',
      'Side actions and lifters',
      'Complete mold assembly documentation'
    ]
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}
