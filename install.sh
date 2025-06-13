#!/bin/bash

# Revolution Property Maintenance - Professional Installation Script
# This script automates the complete setup process for the website

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# ASCII Art Banner
print_banner() {
    clear
    echo -e "${CYAN}"
    cat << "EOF"
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║    ██████╗ ███████╗██╗   ██╗ ██████╗ ██╗     ██╗   ██╗████████╗██╗ ██████╗  ║
║    ██╔══██╗██╔════╝██║   ██║██╔═══██╗██║     ██║   ██║╚══██╔══╝██║██╔═══██╗ ║
║    ██████╔╝█████╗  ██║   ██║██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║ ║
║    ██╔══██╗██╔══╝  ╚██╗ ██╔╝██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║ ║
║    ██║  ██║███████╗ ╚████╔╝ ╚██████╔╝███████╗╚██████╔╝   ██║   ██║╚██████╔╝ ║
║    ╚═╝  ╚═╝╚══════╝  ╚═══╝   ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝  ║
║                                                                              ║
║                    PROPERTY MAINTENANCE WEBSITE INSTALLER                    ║
║                                                                              ║
║                        Professional Setup & Configuration                    ║
║                              Version 1.0.0                                  ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
EOF
    echo -e "${NC}"
    echo -e "${WHITE}Welcome to the Revolution Property Maintenance Website Installer!${NC}"
    echo -e "${YELLOW}This script will automatically set up your complete website with booking system.${NC}"
    echo ""
}

# Progress indicator
show_progress() {
    local current=$1
    local total=$2
    local message=$3
    local percentage=$((current * 100 / total))
    local filled=$((percentage / 2))
    local empty=$((50 - filled))
    
    printf "\r${CYAN}[${GREEN}"
    printf "%${filled}s" | tr ' ' '█'
    printf "${WHITE}"
    printf "%${empty}s" | tr ' ' '░'
    printf "${CYAN}] ${percentage}%% ${WHITE}${message}${NC}"
}

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
}

warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

info() {
    echo -e "${BLUE}[INFO] $1${NC}"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        error "This script should not be run as root for security reasons."
        echo "Please run as a regular user with sudo privileges."
        exit 1
    fi
}

# System requirements check
check_requirements() {
    log "Checking system requirements..."
    
    # Check OS
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        OS="linux"
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        OS="macos"
    else
        error "Unsupported operating system: $OSTYPE"
        exit 1
    fi
    
    # Check for required commands
    local required_commands=("curl" "git" "unzip")
    for cmd in "${required_commands[@]}"; do
        if ! command -v $cmd &> /dev/null; then
            error "$cmd is required but not installed."
            echo "Please install $cmd and run this script again."
            exit 1
        fi
    done
    
    log "System requirements check passed ✓"
}

# Install Node.js if not present
install_nodejs() {
    if command -v node &> /dev/null; then
        local node_version=$(node --version | cut -d'v' -f2)
        local major_version=$(echo $node_version | cut -d'.' -f1)
        
        if [[ $major_version -ge 18 ]]; then
            log "Node.js $node_version is already installed ✓"
            return
        else
            warning "Node.js version $node_version is too old. Installing Node.js 20..."
        fi
    else
        log "Installing Node.js 20..."
    fi
    
    # Install Node.js using NodeSource repository
    if [[ "$OS" == "linux" ]]; then
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
    elif [[ "$OS" == "macos" ]]; then
        if command -v brew &> /dev/null; then
            brew install node@20
        else
            error "Homebrew is required on macOS. Please install it first."
            exit 1
        fi
    fi
    
    log "Node.js installed successfully ✓"
}

# Interactive configuration
configure_environment() {
    echo ""
    echo -e "${PURPLE}╔══════════════════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${PURPLE}║                           ENVIRONMENT CONFIGURATION                         ║${NC}"
    echo -e "${PURPLE}╚══════════════════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    
    # Database Configuration
    echo -e "${CYAN}📊 DATABASE CONFIGURATION${NC}"
    echo -e "${YELLOW}Choose your database option:${NC}"
    echo "1) Supabase (Recommended - Free tier available)"
    echo "2) Local PostgreSQL"
    echo "3) Skip database setup (configure later)"
    
    read -p "Enter your choice (1-3): " db_choice
    
    case $db_choice in
        1)
            echo ""
            echo -e "${BLUE}Setting up Supabase configuration...${NC}"
            echo "Please visit https://supabase.com and create a new project."
            echo ""
            read -p "Enter your Supabase Project URL: " SUPABASE_URL
            read -p "Enter your Supabase Service Role Key: " SUPABASE_SERVICE_KEY
            ;;
        2)
            echo ""
            echo -e "${BLUE}Setting up PostgreSQL configuration...${NC}"
            read -p "Enter PostgreSQL host (default: localhost): " PG_HOST
            PG_HOST=${PG_HOST:-localhost}
            read -p "Enter PostgreSQL port (default: 5432): " PG_PORT
            PG_PORT=${PG_PORT:-5432}
            read -p "Enter PostgreSQL database name: " PG_DATABASE
            read -p "Enter PostgreSQL username: " PG_USERNAME
            read -s -p "Enter PostgreSQL password: " PG_PASSWORD
            echo ""
            ;;
        3)
            echo -e "${YELLOW}Skipping database configuration. You can set it up later in .env.local${NC}"
            ;;
        *)
            error "Invalid choice. Defaulting to skip database setup."
            ;;
    esac
    
    echo ""
    echo -e "${CYAN}📧 EMAIL CONFIGURATION${NC}"
    echo -e "${YELLOW}Choose your email provider:${NC}"
    echo "1) Gmail"
    echo "2) SendGrid"
    echo "3) Custom SMTP"
    echo "4) Skip email setup"
    
    read -p "Enter your choice (1-4): " email_choice
    
    case $email_choice in
        1)
            echo ""
            echo -e "${BLUE}Setting up Gmail SMTP...${NC}"
            echo "Note: You'll need to enable 2FA and create an App Password"
            SMTP_HOST="smtp.gmail.com"
            SMTP_PORT="587"
            SMTP_SECURE="false"
            read -p "Enter your Gmail address: " SMTP_USERNAME
            read -s -p "Enter your Gmail App Password: " SMTP_PASSWORD
            echo ""
            ;;
        2)
            echo ""
            echo -e "${BLUE}Setting up SendGrid SMTP...${NC}"
            SMTP_HOST="smtp.sendgrid.net"
            SMTP_PORT="587"
            SMTP_SECURE="false"
            SMTP_USERNAME="apikey"
            read -s -p "Enter your SendGrid API Key: " SMTP_PASSWORD
            echo ""
            ;;
        3)
            echo ""
            echo -e "${BLUE}Setting up custom SMTP...${NC}"
            read -p "Enter SMTP host: " SMTP_HOST
            read -p "Enter SMTP port (default: 587): " SMTP_PORT
            SMTP_PORT=${SMTP_PORT:-587}
            read -p "Use TLS? (true/false, default: false): " SMTP_SECURE
            SMTP_SECURE=${SMTP_SECURE:-false}
            read -p "Enter SMTP username: " SMTP_USERNAME
            read -s -p "Enter SMTP password: " SMTP_PASSWORD
            echo ""
            ;;
        4)
            echo -e "${YELLOW}Skipping email configuration. You can set it up later in .env.local${NC}"
            ;;
        *)
            error "Invalid choice. Skipping email setup."
            ;;
    esac
    
    echo ""
    echo -e "${CYAN}⚙️  GENERAL CONFIGURATION${NC}"
    read -p "Enter admin email address: " ADMIN_EMAIL
    read -p "Enter company email for notifications: " SMTP_FROM_EMAIL
    
    # Generate random secret
    NEXTAUTH_SECRET=$(openssl rand -base64 32 2>/dev/null || echo "your_random_secret_$(date +%s)")
    
    echo ""
    log "Configuration completed ✓"
}

# Create environment file
create_env_file() {
    log "Creating environment configuration file..."
    
    cat > .env.local << EOF
# Revolution Property Maintenance - Environment Configuration
# Generated on $(date)

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=${SUPABASE_URL:-your_supabase_project_url}
SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_KEY:-your_supabase_service_role_key}

# PostgreSQL Configuration (if using local database)
PG_HOST=${PG_HOST:-localhost}
PG_PORT=${PG_PORT:-5432}
PG_DATABASE=${PG_DATABASE:-revolution_property_maintenance}
PG_USERNAME=${PG_USERNAME:-your_username}
PG_PASSWORD=${PG_PASSWORD:-your_password}

# SMTP Email Configuration
SMTP_HOST=${SMTP_HOST:-smtp.gmail.com}
SMTP_PORT=${SMTP_PORT:-587}
SMTP_SECURE=${SMTP_SECURE:-false}
SMTP_USERNAME=${SMTP_USERNAME:-your_email@gmail.com}
SMTP_PASSWORD=${SMTP_PASSWORD:-your_app_password}
SMTP_FROM_EMAIL=${SMTP_FROM_EMAIL:-noreply@revolutionpropertymaintenance.co.uk}

# Admin Configuration
ADMIN_EMAIL=${ADMIN_EMAIL:-admin@revolutionpropertymaintenance.co.uk}

# Security
NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
NEXTAUTH_URL=http://localhost:2000

# Application Configuration
PORT=2000
NODE_ENV=development
EOF
    
    log "Environment file created ✓"
}

# Install dependencies
install_dependencies() {
    log "Installing project dependencies..."
    
    # Check if package.json exists
    if [[ ! -f "package.json" ]]; then
        error "package.json not found. Make sure you're in the correct directory."
        exit 1
    fi
    
    # Install dependencies with progress
    npm install --silent &
    local npm_pid=$!
    
    while kill -0 $npm_pid 2>/dev/null; do
        show_progress 1 4 "Installing dependencies..."
        sleep 1
    done
    
    wait $npm_pid
    echo ""
    log "Dependencies installed successfully ✓"
}

# Build the application
build_application() {
    log "Building the application..."
    
    npm run build &
    local build_pid=$!
    
    while kill -0 $build_pid 2>/dev/null; do
        show_progress 3 4 "Building application..."
        sleep 1
    done
    
    wait $build_pid
    echo ""
    log "Application built successfully ✓"
}

# Setup database (if using local PostgreSQL)
setup_database() {
    if [[ -n "$PG_DATABASE" && "$db_choice" == "2" ]]; then
        log "Setting up PostgreSQL database..."
        
        # Check if PostgreSQL is running
        if ! pg_isready -h "$PG_HOST" -p "$PG_PORT" &>/dev/null; then
            warning "PostgreSQL is not running or not accessible."
            echo "Please start PostgreSQL and run the database setup manually."
            return
        fi
        
        # Create database if it doesn't exist
        createdb -h "$PG_HOST" -p "$PG_PORT" -U "$PG_USERNAME" "$PG_DATABASE" 2>/dev/null || true
        
        # Run migrations
        if [[ -f "supabase/migrations/20250609095743_withered_block.sql" ]]; then
            psql -h "$PG_HOST" -p "$PG_PORT" -U "$PG_USERNAME" -d "$PG_DATABASE" -f "supabase/migrations/20250609095743_withered_block.sql"
            log "Database schema created ✓"
        fi
    fi
}

# Create startup script
create_startup_script() {
    log "Creating startup script..."
    
    cat > start.sh << 'EOF'
#!/bin/bash

# Revolution Property Maintenance - Startup Script

echo "🚀 Starting Revolution Property Maintenance Website..."
echo "📍 Server will be available at: http://localhost:2000"
echo "📧 Admin panel: http://localhost:2000/admin (if configured)"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Load environment variables
if [[ -f .env.local ]]; then
    export $(cat .env.local | grep -v '^#' | xargs)
fi

# Start the development server
npm run dev
EOF
    
    chmod +x start.sh
    log "Startup script created ✓"
}

# Create production deployment script
create_deployment_script() {
    log "Creating deployment script..."
    
    cat > deploy.sh << 'EOF'
#!/bin/bash

# Revolution Property Maintenance - Production Deployment Script

echo "🚀 Deploying Revolution Property Maintenance Website..."

# Build for production
echo "📦 Building for production..."
npm run build

# Start production server
echo "🌐 Starting production server..."
npm start
EOF
    
    chmod +x deploy.sh
    log "Deployment script created ✓"
}

# Final setup instructions
show_completion() {
    clear
    echo -e "${GREEN}"
    cat << "EOF"
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                            🎉 INSTALLATION COMPLETE! 🎉                     ║
║                                                                              ║
║                    Revolution Property Maintenance Website                   ║
║                              Successfully Installed                          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
EOF
    echo -e "${NC}"
    
    echo -e "${WHITE}🚀 Your website is ready to launch!${NC}"
    echo ""
    echo -e "${CYAN}📋 QUICK START COMMANDS:${NC}"
    echo -e "${YELLOW}  Start Development Server:${NC}  ./start.sh"
    echo -e "${YELLOW}  Start Production Server:${NC}   ./deploy.sh"
    echo -e "${YELLOW}  Manual Start:${NC}              npm run dev"
    echo ""
    echo -e "${CYAN}🌐 ACCESS POINTS:${NC}"
    echo -e "${YELLOW}  Website:${NC}                   http://localhost:2000"
    echo -e "${YELLOW}  Booking System:${NC}            http://localhost:2000/booking"
    echo -e "${YELLOW}  Contact Form:${NC}              http://localhost:2000/contact"
    echo -e "${YELLOW}  Services:${NC}                  http://localhost:2000/services"
    echo ""
    echo -e "${CYAN}📁 IMPORTANT FILES:${NC}"
    echo -e "${YELLOW}  Environment Config:${NC}        .env.local"
    echo -e "${YELLOW}  Startup Script:${NC}            start.sh"
    echo -e "${YELLOW}  Deployment Script:${NC}         deploy.sh"
    echo -e "${YELLOW}  Database Schema:${NC}           supabase/migrations/"
    echo ""
    echo -e "${CYAN}🔧 CONFIGURATION:${NC}"
    echo -e "${YELLOW}  Database:${NC}                  $([ -n "$SUPABASE_URL" ] && echo "Supabase" || echo "Local PostgreSQL")"
    echo -e "${YELLOW}  Email Provider:${NC}            $([ -n "$SMTP_HOST" ] && echo "$SMTP_HOST" || echo "Not configured")"
    echo -e "${YELLOW}  Admin Email:${NC}               ${ADMIN_EMAIL:-Not configured}"
    echo ""
    echo -e "${GREEN}✅ FEATURES INCLUDED:${NC}"
    echo "   • Responsive website design"
    echo "   • Complete booking system with email notifications"
    echo "   • Service pages for all offerings"
    echo "   • Contact form with database storage"
    echo "   • Portfolio showcase"
    echo "   • SEO optimized for South Wales areas"
    echo "   • Professional email templates"
    echo "   • Security features (honeypot, validation)"
    echo ""
    echo -e "${BLUE}📖 NEXT STEPS:${NC}"
    echo "1. Run './start.sh' to start the development server"
    echo "2. Visit http://localhost:2000 to see your website"
    echo "3. Test the booking system at /booking"
    echo "4. Customize content in the app/ directory"
    echo "5. Configure your domain and SSL for production"
    echo ""
    echo -e "${PURPLE}💡 SUPPORT:${NC}"
    echo "   • Documentation: docs/SETUP.md"
    echo "   • Environment variables: .env.local"
    echo "   • Database schema: supabase/migrations/"
    echo ""
    echo -e "${WHITE}Thank you for choosing Revolution Property Maintenance!${NC}"
    echo -e "${CYAN}Ready to revolutionize your property maintenance business! 🏠✨${NC}"
    echo ""
}

# Main installation process
main() {
    print_banner
    
    # Confirmation
    echo -e "${YELLOW}This installer will:${NC}"
    echo "• Check system requirements"
    echo "• Install Node.js (if needed)"
    echo "• Configure environment variables"
    echo "• Install all dependencies"
    echo "• Set up the database"
    echo "• Build the application"
    echo "• Create startup scripts"
    echo ""
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo ""
    
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Installation cancelled."
        exit 0
    fi
    
    echo ""
    log "Starting Revolution Property Maintenance installation..."
    
    # Installation steps
    check_root
    show_progress 1 10 "Checking system requirements..."
    check_requirements
    
    show_progress 2 10 "Installing Node.js..."
    install_nodejs
    
    show_progress 3 10 "Configuring environment..."
    configure_environment
    
    show_progress 4 10 "Creating environment file..."
    create_env_file
    
    show_progress 5 10 "Installing dependencies..."
    install_dependencies
    
    show_progress 6 10 "Setting up database..."
    setup_database
    
    show_progress 7 10 "Building application..."
    build_application
    
    show_progress 8 10 "Creating startup scripts..."
    create_startup_script
    
    show_progress 9 10 "Creating deployment scripts..."
    create_deployment_script
    
    show_progress 10 10 "Finalizing installation..."
    sleep 1
    echo ""
    
    show_completion
}

# Error handling
trap 'error "Installation failed. Please check the error messages above."; exit 1' ERR

# Run main installation
main "$@"