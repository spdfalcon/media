/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem'
        },
        extend: {
            colors: {
                'main-red-admin': '#E20E02',
                'main-orang-admin': '#F68A04',
                'main-blue-admin': '#007AFF',
                'main-green-admin': '#14E788',
                'main-gray-admin': '#858EA3',
                'main-gray-text-admin': '#d1d0cf',
        
                'main-orang-web' : '#FF9800',
                'main-bg-web-dark' : '#0D121E',
                'second-bg-web-dark' : '#1A1F2A',
                'third-web-dark' : '#2E313A',
                'main-green-web' : '#0CC13F',
              },
              fontFamily:{
                iransans : ['IRANSans']
              }
        },
    },
    plugins: [],
}

