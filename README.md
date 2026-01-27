# AI Resume Analyzer

An intelligent resume analysis tool that provides ATS (Applicant Tracking System) scores and actionable improvement tips to help you land your dream job.

## ✨ Features

- 📄 **Resume Upload** – Drag & drop or click to upload your resume (PDF support)
- 🎯 **ATS Score Analysis** – Get a compatibility score for applicant tracking systems
- 💡 **Smart Feedback** – Receive AI-powered suggestions to improve your resume
- 🏢 **Job-Specific Analysis** – Tailor feedback based on company and job description
- 🔐 **Authentication** – Secure user authentication system
- 🎨 **Modern UI** – Beautiful, responsive design with Tailwind CSS

## 🚀 Tech Stack

- **Framework**: [React Router](https://reactrouter.com/) (Full-stack with SSR)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **File Handling**: react-dropzone
- **PDF Processing**: pdfjs-dist
- **AI Integration**: Puter.js

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/GeekKwame/ai-resume-analyzer.git

# Navigate to project directory
cd ai-resume-analyzer

# Install dependencies
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 📁 Project Structure

```
ai-resume-analyzer/
├── app/
│   ├── components/       # Reusable UI components
│   │   ├── FileUploader.tsx
│   │   ├── Navbar.tsx
│   │   ├── ResumeCard.tsx
│   │   └── ScoreCircle.tsx
│   ├── lib/              # Utility functions
│   ├── routes/           # Page routes
│   │   ├── auth.tsx      # Authentication page
│   │   ├── home.tsx      # Landing page
│   │   └── upload.tsx    # Resume upload & analysis
│   ├── app.css           # Global styles
│   ├── root.tsx          # Root layout
│   └── routes.ts         # Route configuration
├── public/               # Static assets
├── types/                # TypeScript type definitions
└── constants/            # App constants
```

## 🛣️ Roadmap

- [x] Project setup with React Router
- [x] User authentication
- [x] Resume upload interface
- [ ] PDF to image conversion
- [ ] AI-powered resume analysis
- [ ] ATS score calculation
- [ ] Improvement suggestions
- [ ] Resume history & dashboard

## 🐳 Docker Deployment

```bash
# Build the image
docker build -t ai-resume-analyzer .

# Run the container
docker run -p 3000:3000 ai-resume-analyzer
```

## 📄 License

This project is private.

---

Built with ❤️ by GeekKwame
