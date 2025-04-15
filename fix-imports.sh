#!/bin/bash

# Script to fix import paths after directory restructuring

# Fix imports in components/sections
find ./src/components/sections -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../store/themeStore"|from "../../store/themeStore"|g'
find ./src/components/sections -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../types"|from "../../types"|g'
find ./src/components/sections -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../config/supabase"|from "../../config/supabase"|g'

# Fix imports in components/ui
find ./src/components/ui -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../store/themeStore"|from "../../store/themeStore"|g'
find ./src/components/ui -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../types"|from "../../types"|g'

# Fix imports in components/common
find ./src/components/common -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../store/themeStore"|from "../../store/themeStore"|g'
find ./src/components/common -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../types"|from "../../types"|g'

# Fix imports in layouts/core
find ./src/layouts/core -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../store/themeStore"|from "../../store/themeStore"|g'
find ./src/layouts/core -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../types"|from "../../types"|g'
find ./src/layouts/core -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../hooks/useActiveSection"|from "../../hooks/useActiveSection"|g'

# Fix imports in layouts/services
find ./src/layouts/services -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../store/themeStore"|from "../../store/themeStore"|g'
find ./src/layouts/services -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|from "../types"|from "../../types"|g'

echo "Import paths fixed!"
