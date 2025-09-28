# Company Intranet Portal

A modern, responsive intranet portal built with React, Redux, and Tailwind CSS. This application provides a comprehensive platform for company employees to access HR information, financial data, IT support, employee directory, photo gallery, and organizational charts.

Demo link :- https://intranet-portal-one.vercel.app/

## 🚀 Features

### 🔐 Authentication & Security
- **Company Domain Validation**: Only `@yourcompany.com` email addresses can access
- **Password Authentication**: Secure login with password validation
- **Role-based Access**: Different user roles (Admin, Manager, Employee, etc.)
- **Session Management**: Persistent login state with Redux

### 📱 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern Navbar**: Clean top navigation with mobile hamburger menu
- **Interactive Components**: Hover effects, transitions, and smooth animations
- **Professional Styling**: Consistent design using Tailwind CSS

### 📊 Comprehensive Modules

#### Dashboard
- Personalized welcome with user information
- Key company metrics and statistics
- Recent activities timeline
- Upcoming events calendar
- Quick action buttons

#### Human Resources
- Company policies and handbooks
- Job openings and career opportunities
- EPF information and employee benefits
- HR forms and document downloads
- Tabbed interface for easy navigation

#### Finance & Accounting
- Financial overview with key metrics
- Bank account management
- Investment portfolio tracking
- Tax information and GST details
- Transaction history

#### IT Support
- Support ticket system with priority levels
- System status monitoring
- IT circulars and announcements
- Resource library with guides
- System maintenance schedules

#### Employee Directory
- Searchable employee database
- Advanced filtering by department
- Contact information and profiles
- Department-based organization
- Interactive employee cards

#### Photo Gallery
- Categorized photo collections
- Image modal viewer
- Category filtering
- Upload functionality
- Photo metadata tracking

#### Organization Chart
- Hierarchical company structure
- Department-based views
- Level indicators and color coding
- Interactive navigation
- Visual legend for clarity

## 🛠️ Technology Stack

- **Frontend**: React 18.2.0
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd intranet-portal-full
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔑 Demo Accounts

The application comes with pre-configured demo accounts for testing:

| Email | Password | Role |
|-------|----------|------|
| admin@yourcompany.com | admin123 | Admin |
| john.doe@yourcompany.com | password123 | Manager |
| jane.smith@yourcompany.com | password123 | Employee |
| mike.wilson@yourcompany.com | password123 | HR Manager |
| sarah.jones@yourcompany.com | password123 | Finance Manager |
| david.brown@yourcompany.com | password123 | IT Manager |

## 📁 Project Structure

```
intranet-portal-full/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Main navigation component
│   ├── pages/
│   │   ├── Dashboard.jsx       # Dashboard with metrics and activities
│   │   ├── HR.jsx             # Human resources module
│   │   ├── Finance.jsx        # Finance and accounting module
│   │   ├── IT.jsx             # IT support and systems module
│   │   ├── Contacts.jsx       # Employee directory
│   │   ├── Gallery.jsx        # Photo gallery
│   │   ├── OrgChart.jsx       # Organization chart
│   │   └── Login.jsx          # Authentication page
│   ├── store/
│   │   └── store.js           # Redux store configuration
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Changing Company Domain
To change the allowed email domain, update the validation in `src/pages/Login.jsx`:

```javascript
if (!email.endsWith('@yourcompany.com')) {
  setError('Access restricted to company domain users only.')
  return
}
```

### Adding New Users
Add new users to the `validUsers` array in `src/pages/Login.jsx`:

```javascript
const validUsers = [
  { email: 'newuser@yourcompany.com', password: 'password123', name: 'New User', role: 'Employee' },
  // ... existing users
]
```

### Styling Customization
The application uses Tailwind CSS. You can customize the design by:
- Modifying `tailwind.config.js` for theme customization
- Updating component classes in individual files
- Adding custom CSS in `src/index.css`

## 📱 Responsive Design

The application is fully responsive and includes:
- Mobile-first design approach
- Collapsible navigation for mobile devices
- Responsive grid layouts
- Touch-friendly interface elements
- Optimized images and content

## 🔒 Security Features

- Email domain validation
- Password-based authentication
- Session management with Redux
- Protected routes
- Input validation and sanitization

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v1.0.0** - Initial release with all core features
  - Authentication system
  - Dashboard with metrics
  - HR, Finance, IT modules
  - Employee directory
  - Photo gallery
  - Organization chart
  - Responsive design

---

**Built with ❤️ for modern companies**
