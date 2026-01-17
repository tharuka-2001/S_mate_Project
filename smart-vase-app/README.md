# Smart Vase App 🌱

A modern, cross-platform mobile application for monitoring and controlling smart plant vases. Built with Expo, React Native, and TypeScript, this app provides real-time sensor data visualization, automated plant care controls, and comprehensive plant health monitoring.

## 📋 Overview

Smart Vase App is an intelligent plant care companion that connects to IoT-enabled plant vases equipped with multiple sensors. The app allows users to monitor environmental conditions, control watering systems, manage fertilizer distribution, and receive insights about plant health—all from a user-friendly mobile interface.

### Key Features

- **Home Dashboard**: Real-time sensor data display including water level, soil moisture, temperature, humidity, and light intensity
- **Monitor Tab**: Advanced analytics and historical data visualization using charts and graphs
- **Control Tab**: Manual and automated control of watering and fertilizer systems
- **Settings Tab**: Configuration and preferences management
- **System Health Monitoring**: Real-time plant and system status tracking
- **Responsive Design**: Works seamlessly on iOS, Android, and Web platforms

## 🛠️ Tech Stack

- **Framework**: [Expo](https://expo.dev) + [React Native](https://reactnative.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Navigation**: [Expo Router](https://expo.dev/router) with file-based routing
- **UI Styling**: [NativeWind](https://www.nativewind.dev) (Tailwind CSS for React Native)
- **Components**: 
  - [@expo/vector-icons](https://github.com/expo/vector-icons) for icons
  - [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) for gradient backgrounds
  - [react-native-gifted-charts](https://github.com/JeswinSunsi/react-native-gifted-charts) for data visualization
  - [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) for smooth animations
- **Linting**: ESLint with Expo configuration

## 📁 Project Structure

```
smart-vase-app/
├── app/                          # Application screens and routing
│   ├── _layout.tsx              # Root layout configuration
│   ├── index.tsx                # Root page
│   └── (tabs)/                  # Tab-based navigation group
│       ├── _layout.tsx          # Tabs layout with bottom navigation
│       ├── home.tsx             # Home dashboard with sensor data
│       ├── monitor.tsx          # Analytics and monitoring screen
│       ├── control.tsx          # Device control panel
│       └── settings.tsx         # Application settings
├── components/                   # Reusable UI components
│   ├── ActionButton.tsx         # Custom action button component
│   ├── Card.tsx                 # Reusable card component
│   ├── SensorCard.tsx           # Sensor data display card
│   ├── themed-text.tsx          # Theme-aware text component
│   ├── themed-view.tsx          # Theme-aware view component
│   ├── parallax-scroll-view.tsx # Parallax scroll effect
│   ├── haptic-tab.tsx           # Haptic feedback for tabs
│   ├── external-link.tsx        # External link handler
│   ├── hello-wave.tsx           # Welcome animation
│   └── ui/                      # UI sub-components
│       ├── collapsible.tsx      # Collapsible section component
│       ├── icon-symbol.tsx      # Icon symbol component
│       └── icon-symbol.ios.tsx  # iOS-specific icon component
├── assets/                       # Static assets
│   └── images/                  # Icons, splash screens, app images
├── constants/                    # Application constants
│   └── theme.ts                 # Theme configuration and colors
├── hooks/                        # Custom React hooks
│   ├── use-color-scheme.ts      # Color scheme detection hook
│   ├── use-color-scheme.web.ts  # Web-specific color scheme hook
│   └── use-theme-color.ts       # Theme color hook
├── scripts/                      # Build and utility scripts
│   └── reset-project.js         # Project reset script
├── app.json                      # Expo configuration
├── package.json                  # Project dependencies and scripts
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── babel.config.js               # Babel configuration
├── metro.config.js               # Metro bundler configuration
├── eslint.config.js              # ESLint configuration
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator or Android Emulator (optional)
- Expo Go app (for quick testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smart-vase-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   npx expo start
   ```

### Running the App

After running `npm start`, you'll see options to open the app on:

- **iOS Simulator**: Press `i`
- **Android Emulator**: Press `a`
- **Web Browser**: Press `w`
- **Expo Go**: Scan the QR code with the [Expo Go](https://expo.dev/go) app on your device

## 📝 Available Scripts

```bash
# Start development server
npm start

# Start on Android
npm run android

# Start on iOS
npm run ios

# Start on Web
npm run web

# Lint code
npm lint

# Reset project to blank state
npm run reset-project
```

## 🎨 Styling & Theme

The app uses **NativeWind** (Tailwind CSS for React Native) for styling. Theme configuration is centralized in [constants/theme.ts](constants/theme.ts).

### Custom Hooks
- `use-color-scheme.ts`: Detects system color scheme (light/dark)
- `use-theme-color.ts`: Manages theme colors throughout the app

## 📊 Key Components

### Home Dashboard
Displays real-time sensor data with visual cards for:
- Water Level
- Soil Moisture
- Temperature & Humidity
- Light Intensity
- System Health Status

### Monitor Tab
Advanced analytics including:
- Historical data charts
- Trend analysis
- Performance metrics

### Control Tab
Manual controls for:
- Watering system (on/off, amount, schedule)
- Fertilizer distribution
- Auto mode settings
- Custom scheduling

### Settings Tab
User preferences and configuration options

## 🔌 Integration Points

The app is designed to integrate with:
- IoT plant vase devices with sensor arrays
- Backend API for data persistence and historical analysis
- Real-time data streaming (WebSocket or similar)
- Cloud storage for long-term analytics

### Expected API Endpoints (to be implemented)
- `GET /api/sensors/current` - Current sensor readings
- `GET /api/sensors/history` - Historical sensor data
- `POST /api/controls/water` - Control watering
- `POST /api/controls/fertilizer` - Control fertilizer
- `GET /api/settings` - User settings
- `POST /api/settings` - Update settings

## 🧪 Development

### Code Structure Best Practices
- Use TypeScript for type safety
- Keep components modular and reusable
- Use custom hooks for logic separation
- Follow the file-based routing convention
- Organize components by feature/function

### Adding New Screens
1. Create a new `.tsx` file in the `app` directory
2. Use Expo Router's file-based routing automatically
3. Add navigation to [app/(tabs)/_layout.tsx](app/(tabs)/_layout.tsx) if it's a tab

### Adding New Components
1. Create component in the `components/` directory
2. Keep props interface separate
3. Use NativeWind classes for styling
4. Export as default

## 📦 Dependencies

### Key Dependencies
- `expo@~54.0.27` - Expo framework
- `react@19.1.0` - React library
- `react-native@0.81.5` - React Native
- `expo-router@~6.0.17` - Navigation
- `nativewind@^4.2.1` - Tailwind CSS styling
- `react-native-gifted-charts@^1.4.69` - Charts
- `expo-haptics@~15.0.8` - Haptic feedback

See [package.json](package.json) for complete dependency list.

## 🔒 Configuration

### App Configuration ([app.json](app.json))
- App name: `smart-vase-app`
- Version: `1.0.0`
- Orientation: Portrait
- Dark mode support: Automatic (based on system preference)
- New Architecture enabled for better performance

### Platform-Specific Settings
- **iOS**: Tablet support enabled
- **Android**: Edge-to-edge enabled, adaptive icons configured
- **Web**: Static export enabled

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on default port
lsof -ti:8081 | xargs kill -9
```

**Metro bundler cache issues**
```bash
npm start -- --reset-cache
```

**Clear node_modules and reinstall**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Platform-specific issues**
- iOS: Clear Xcode cache: `xcode-select --reset`
- Android: Clear Android cache: `cd android && ./gradlew clean`

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/new-feature`
2. Make your changes
3. Run linter: `npm lint`
4. Commit with meaningful message: `git commit -m "Add new feature"`
5. Push to branch: `git push origin feature/new-feature`
6. Open a Pull Request

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Expo Router Guide](https://expo.dev/router)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is part of the Smart Mate Project. Check LICENSE file for details.

## 👨‍💻 Author

Smart Mate Project Team

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] Real-time data streaming
- [ ] Push notifications for alerts
- [ ] Advanced scheduling system
- [ ] Machine learning for plant care predictions
- [ ] Community plant database
- [ ] Social features and plant sharing
- [ ] Offline mode support

## 📞 Support

For issues, questions, or suggestions, please open an issue in the project repository.
