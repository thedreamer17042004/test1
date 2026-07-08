# Custom Angular Components - DevExtreme Clone

A **100% free** Angular 19 application with custom-built components inspired by DevExtreme, using **Angular Material** and **pure CSS/Canvas API** (no external paid libraries).

## Features

This project includes custom implementations of the following components:

- **Data Grid** - Full-featured data table with sorting, filtering, pagination, row selection
- **Form** - Comprehensive form with validation, various input types, and Material Design styling
- **Chart** - Line, Bar, Pie, Area charts using **pure Canvas API** (no Chart.js or DevExtreme)
- **Scheduler** - Calendar with Day, Week, Month, Agenda views
- **Tree View** - Hierarchical data display with expand/collapse
- **Tabs** - Tabbed interface (coming soon)
- **Popup** - Modal dialogs (coming soon)
- **Toolbar** - Customizable toolbar (coming soon)
- **Menu** - Navigation menus (coming soon)
- **Button** - Various button styles (coming soon)

## Tech Stack

- **Angular 19** - Latest Angular version
- **Angular Material** - Free Material Design components
- **Pure Canvas API** - For charts (no external libraries)
- **CSS/SCSS** - Custom styling
- **TypeScript** - Strong typing

## Installation

```bash
# Clone the repository
git clone https://github.com/thedreamer17042004/test1.git
cd test1

# Install dependencies
npm install

# Run the application
ng serve
```

Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/              # Home page
│   │   ├── data-grid/         # Custom Data Grid
│   │   ├── form/              # Custom Form
│   │   ├── chart/             # Custom Charts (Canvas API)
│   │   ├── scheduler/         # Custom Scheduler
│   │   └── tree-view/         # Custom Tree View
│   ├── app.component.ts       # Main app component
│   ├── app.config.ts          # App configuration
│   └── app.routes.ts          # Routing
├── styles.scss               # Global styles
├── index.html                # HTML template
└── main.ts                   # Entry point
```

## Key Features

### 1. Data Grid
- ✅ Sorting by column headers
- ✅ Filtering with search box
- ✅ Pagination with page size options
- ✅ Row selection with checkboxes
- ✅ Column visibility toggle
- ✅ Export to CSV
- ✅ Add/Edit/Delete rows

### 2. Form
- ✅ Reactive Forms with validation
- ✅ Multiple form sections
- ✅ Various input types (text, email, number, date, select, textarea)
- ✅ Material Design form fields
- ✅ Slide toggles for boolean values
- ✅ Form submission and reset

### 3. Chart (Pure Canvas API)
- ✅ Line Chart with multiple series
- ✅ Bar Chart with custom colors
- ✅ Pie Chart with legend
- ✅ Area Chart
- ✅ Responsive design
- ✅ Custom color schemes
- ✅ **NO external chart libraries!**

### 4. Scheduler
- ✅ Day, Week, Month, Agenda views
- ✅ Navigation between dates
- ✅ Appointment management
- ✅ Color-coded appointments
- ✅ Today button

### 5. Tree View
- ✅ Hierarchical data display
- ✅ Expand/collapse nodes
- ✅ Search functionality
- ✅ Checkbox selection
- ✅ Custom icons

## Why This Project?

- **100% Free** - No paid libraries like DevExtreme
- **Lightweight** - Uses Angular Material and pure CSS/Canvas
- **Customizable** - Easy to modify and extend
- **Modern** - Angular 19 with standalone components
- **Responsive** - Works on all screen sizes

## Comparison with DevExtreme

| Feature | DevExtreme | This Project |
|---------|-----------|--------------|
| Cost | Paid ($) | **Free** |
| Data Grid | ✅ | ✅ |
| Form | ✅ | ✅ |
| Charts | ✅ | ✅ (Canvas API) |
| Scheduler | ✅ | ✅ |
| Tree View | ✅ | ✅ |
| Dependencies | Heavy | Lightweight |
| Customization | Limited | Full Control |

## License

MIT License - Free for personal and commercial use!

## Contributing

Feel free to contribute by:
- Reporting bugs
- Suggesting features
- Submitting pull requests

## Support

For questions and support, please open an issue on GitHub.
