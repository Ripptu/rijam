#!/bin/bash
FILES=(
  "src/components/AboutSection.tsx"
  "src/components/ProcessSection.tsx"
  "src/components/GuaranteeSection.tsx"
  "src/components/TestimonialsSection.tsx"
  "src/components/FAQSection.tsx"
  "src/components/ContactSection.tsx"
  "src/components/Footer.tsx"
  "src/components/ProblemSection.tsx"
  "src/components/ServicesSection.tsx"
)
for file in "${FILES[@]}"; do
  # Replace text colors
  sed -i 's/text-text-dark-muted/text-text-light-muted/g' "$file"
  sed -i 's/text-text-dark/text-text-light/g' "$file"
  # Replace border colors
  sed -i 's/border-white\/5/border-black\/5/g' "$file"
  sed -i 's/border-white\/10/border-black\/10/g' "$file"
  sed -i 's/border-white\/20/border-black\/20/g' "$file"
  sed -i 's/border-border-subtle-dark/border-border-subtle-light/g' "$file"
  # Optional: bg-white/5 for hovers on beige should probably be bg-black/5
  sed -i 's/hover:bg-white\/5/hover:bg-black\/5/g' "$file"
done
