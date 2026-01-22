# Commercium

Commercium is a modular commerce admin platform focused on clean, testable building blocks for commerce features. The repository currently contains core app modules under an `app/` directory; additional backend and frontend scaffolding may be added later.

## Features

- **Authentication**: Secure login with 2FA support.
- **Dashboard**: Overview of store metrics and activity.
- **Product Management**: Manage products and variants.
- **Modular Architecture**: Easily extend with new modules (orders, customers, discounts, shipping, etc.).

## Current Folder Structure

```
/commercium
├── LICENSE
├── README.md
├── app/
│   ├── data-layer/   # Data access, models, and database logic
│   └── interface/    # API endpoints, controllers, and route handlers
```

Note: The project is currently organized around the `app/` directory. The previous monorepo-style `data-layer/` and `interface/` layout is planned but not present in this workspace yet.

## Getting Started

1. Clone the repository.
2. Inspect the `app/` folder to find current modules:
	- `app/data-layer/` contains data access and models.
	- `app/interface/` contains API endpoints and controllers.
3. To start `server` go to `app/data-layer` and run `npm run dev:watch` command.
4. To view `interface` go to `app/data-layer` and run `npm run dev`.

## Roadmap

- [ ] Authentication with 2FA
- [ ] Dashboard module
- [ ] Product management with variants

## License

MIT
