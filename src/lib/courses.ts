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
    longDescription: 'SOLIDWORKS Essentials is the perfect starting point for anyone new to 3D CAD design. This comprehensive course introduces you to the SOLIDWORKS interface, basic sketching techniques, and part modeling fundamentals. You will learn how to create and modify parts using features like extrudes, cuts, fillets, and chamfers. By the end of this course, you will have the skills to create basic parts and assemblies, setting a solid foundation for more advanced SOLIDWORKS training.',
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
    title: 'Advanced Part Modeling',
    description: 'Take your part modeling skills to the next level with advanced techniques including complex shapes, sweeps, lofts, and multi-body parts.',
    longDescription: 'Advanced Part Modeling builds upon the fundamentals to help you create complex, production-ready parts. This course dives deep into advanced feature creation including sweeps, lofts, and complex fillets. You will learn multi-body modeling techniques, master model strategies, and advanced patterning methods. Ideal for designers looking to push the boundaries of what they can create in SOLIDWORKS.',
    duration: '3 Days',
    level: 'Intermediate',
    icon: '🔧',
    topics: [
      'Advanced sweep and loft techniques',
      'Multi-body part modeling',
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
    longDescription: 'Assembly Modeling teaches you how to efficiently create and manage complex assemblies in SOLIDWORKS. You will learn advanced mating techniques, assembly structure management, and how to work with large assemblies efficiently. This course covers in-context design, assembly features, and interference detection to ensure your designs function correctly in the real world.',
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
    longDescription: 'SOLIDWORKS Drawings equips you with the skills to create professional technical documentation. Learn to generate standard views, section views, detail views, and auxiliary views. You will master dimensioning techniques, GD&T symbols, and annotations. The course also covers bill of materials creation and customization, ensuring your drawings meet industry standards.',
    duration: '2 Days',
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
    longDescription: 'Sheet Metal Design teaches you how to create manufacturable sheet metal parts in SOLIDWORKS. You will learn to design with bends, flanges, and hems while understanding material properties and bend allowances. The course covers flat pattern creation, exporting for manufacturing, and design validation. Perfect for engineers working in industries like electronics enclosures, automotive, and consumer products.',
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
    longDescription: 'Weldments covers the complete workflow for designing welded structures in SOLIDWORKS. You will learn to create structural frames using standard profiles, add gussets, end caps, and weld beads. The course teaches you how to generate cut lists and create detailed weldment drawings. Essential for anyone designing machine frames, platforms, or structural steel work.',
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
    longDescription: 'Surface Modeling introduces you to the world of complex, organic shapes in SOLIDWORKS. Learn to create and manipulate surfaces for consumer products, automotive design, and industrial applications. This course covers surface creation, manipulation, and repair techniques. You will master the art of creating aesthetically pleasing, complex geometry that goes beyond standard solid modeling.',
    duration: '3 Days',
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
    longDescription: 'Mold Tools provides comprehensive training in injection mold design using SOLIDWORKS. Learn to analyze part manufacturability, create parting lines and surfaces, and design core and cavity components. This course covers mold base selection, ejector systems, cooling channels, and creating complete mold assemblies. Essential for tool and die designers working in the plastics industry.',
    duration: '3 Days',
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
