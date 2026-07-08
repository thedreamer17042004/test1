# DevExtreme Angular Components Demo

A comprehensive **Angular 19** application showcasing **DevExtreme** components cloned from [js.devexpress.com](https://js.devexpress.com/).

## Features

This project includes the following DevExtreme components:

- **Data Grid** - Powerful data grid with sorting, filtering, grouping, and paging
- **Form** - Form components with validation and various input types
- **Chart** - Line, Bar, Pie charts and Range Selector
- **Scheduler** - Calendar and scheduling component
- **Tree View** - Hierarchical data display
- **Tabs** - Tabbed interface with various configurations
- **Popup** - Modal and popup windows
- **Toolbar** - Customizable toolbar with buttons and form elements
- **Menu** - Horizontal, vertical, and context menus
- **Button** - Various button types, sizes, and states

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Angular CLI](https://angular.io/cli) (v19 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/thedreamer17042004/test1.git
cd test1
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install DevExtreme packages:
```bash
npm install devextreme devextreme-angular
# or
yarn add devextreme devextreme-angular
```

## Running the Application

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/              # Home page with component overview
│   │   ├── data-grid/         # Data Grid component
│   │   ├── form/              # Form component
│   │   ├── chart/             # Chart component
│   │   ├── scheduler/         # Scheduler component
│   │   ├── tree-view/         # Tree View component
│   │   ├── tabs/              # Tabs component
│   │   ├── popup/             # Popup component
│   │   ├── toolbar/           # Toolbar component
│   │   ├── menu/              # Menu component
│   │   └── button/            # Button component
│   ├── app.component.ts       # Main app component
│   ├── app.config.ts          # App configuration
│   └── app.routes.ts          # Routing configuration
├── assets/                    # Static assets
├── environments/              # Environment configurations
├── index.html                # Main HTML template
├── main.ts                   # Application entry point
└── styles.scss               # Global styles
```

## Available Scripts

- `ng serve` - Start development server
- `ng build` - Build for production
- `ng test` - Run unit tests

## Components Overview

### 1. Data Grid
- Sorting (single and multiple columns)
- Filtering (row and header filters)
- Grouping with panel
- Paging with page size selector
- Search panel
- Column reordering and resizing
- Row selection (multiple)
- Export to Excel

### 2. Form
- Various input types (text, number, date, checkbox, select, textarea)
- Validation rules (required, email, string length)
- Validation summary display
- Grouped form items
- Form submission and reset

### 3. Chart
- Line Chart with tooltips and labels
- Bar Chart for categorical data
- Pie Chart for proportional data
- Range Selector for time-based data
- Export functionality
- Custom formatting (currency, percent)

### 4. Scheduler
- Multiple views (Day, Week, Month, Agenda)
- Appointment management (create, edit, delete)
- Drag and drop appointments
- Resize appointments
- Recurring appointments
- All-day appointments
- Custom tooltips

### 5. Tree View
- Hierarchical data display
- Check boxes for selection
- Multiple selection modes
- Search functionality
- Toolbar with expand/collapse all
- Custom data source formats

### 6. Tabs
- Simple tabs with text content
- Tabs with icons
- TabPanel with separate title and content templates
- Vertical tabs layout
- Scrolling and navigation buttons
- Swipe gestures (for touch devices)

### 7. Popup
- Simple popup with basic content
- Form popup with input fields
- Confirmation popup for actions
- Full screen popup for large content
- Positioned popup relative to elements
- Drag and drop functionality

### 8. Toolbar
- Basic toolbar with buttons
- Toolbar with dropdown menus
- Toolbar with form elements (textbox, selectbox, datebox)
- Custom toolbar items and branding
- Multi-line toolbar with grouped items

### 9. Menu
- Horizontal menu layout
- Vertical menu layout
- Context menu (right-click)
- Menu with icons
- Custom menu item templates
- Disabled menu items

### 10. Button
- Different button types (default, success, normal, danger)
- Buttons with icons
- Icon-only buttons
- Various button sizes
- Button states (normal, disabled, loading)
- Submit behavior for forms
- Button groups
- Custom styling with CSS classes

## DevExtreme Resources

- [DevExtreme Documentation](https://js.devexpress.com/Documentation/Guide/)
- [DevExtreme Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/)
- [DevExtreme Angular Components](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Integration/Angular/Overview/)

## License

This project is licensed under the MIT License.

## Support

For support and questions about DevExtreme components, visit:
- [DevExtreme Support](https://www.devexpress.com/Support/)
- [DevExtreme GitHub](https://github.com/DevExpress/DevExtreme)
