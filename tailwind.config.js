/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // Disable default container sizes
    container: {
      // Default values will be overridden
      center: true,
      padding: '0',
    },
    extend: {
      container: {
        center: true, 
        padding:'18px',
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1290px",
        },
      },
      
      fontFamily: {
        "Poppins": ["Poppins", "sans-serif"],
      },
      fontSize: {
        '22xl':'22px',
        '24xl': '24px',
        '26xl': '26px',
        '28xl':'28px',
        '30xl': '30px',
        '34xl':'34px',
        '36xl':'36px',
        '38xl':'38px',
        '40xl':'40px',
        '44xl':'44px',
        '50xl':'50px',
        '54xl':'54px',
        '60xl':'60px',
        '70xl':'70px',
      },
      lineHeight: {
        '8': '30px',
        '32':'32px',
        '36':'36px',
        '40':'40px',
        '42':'42px',
        '50':'50px',
        '54':'54px',
        '64':'64px',
        '72':'72px',
        '80':'80px',
      },
      spacing:{
        '410':'410px',
        '446':'446px',
        '480':'480px',
        '520':'520px',
        '538':'538px',
        '566':'566px',
        '590':'590px',
        '605':'605px',
        '630':'630px',
        '671':'671px',
        '694':'694px',
        '705':'705px',
        '740':'740px',
        '755':'755px',
        '794':'794px',
        '845':'845px',
        '988':'988px',
        '1167':'1167px',
      },
      borderRadius:{
        '10':'10px',
        '12':'12px',
        '14':'14px',
        '20':'20px',
        '24':'24px',
        '60':'60px',
        '120':'120px',
      },
      colors:{
        'primaryColor':'#070127',
        'secondaryColor':'#FFFFFF',
        'btnBg':'#8635FD',
        'card1':'#F7F1FF',
        'card2':'#EDFAFA',
        'card3':'#ECF8EF',
        'card4':'#EDF2FA',
        'card5':'#FFF4EA',
        'cardBg':'#F9F5FF',
        'testiBg':'#F7F8FA',
        'purpleHover':'#6B2ACA',
        'borderColor':'D9D9D9',
        'contactBorder':'#DADADB',
      },
      boxShadow: {
        'testibox': '0px 4px 10px 0px #C0CBDC1A',
        'faqshadow':'0px 14px 44px 0px #666A7212',
        'featureBox':'0px 14px 110px 0px #20202024',
        'video':'0px 9px 26px 0px #0701273D',
        'contactShadow':'0px 6px 10px 0px #621EC529',
      },
      backgroundImage: {
        'mainBg':'linear-gradient(90deg, rgba(255, 255, 255, 0) 2.39%, rgba(255, 255, 255, 0.132) 50.12%, rgba(255, 255, 255, 0) 98.37%)',
        'bgBanner': "url('assets/img/banner-bg.svg')",
        'overlay':"url('/assets/img/homePage/overlay.png')",
        'PromoBanner': "url('/assets/img/homePage/dash-bg.svg')",
        'headerBorder':'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)',
        'borderBg':'linear-gradient(90deg, rgba(101, 74, 253, 0.1) 0%, rgba(231, 76, 244, 0.1) 112.33%)',
        'cardGd':'linear-gradient(0deg, #F7F1FF 47.52%, rgba(247, 241, 255, 0) 100%)',
        'cardGd2':'linear-gradient(0deg, #EDFAFA 44.72%, rgba(237, 250, 250, 0) 87.8%)',
        'cardGd3':'linear-gradient(180deg, rgba(237, 242, 250, 0) 6.43%, #EDF2FA 56.99%)',
        'cardGd4':'linear-gradient(180deg, rgba(255, 244, 234, 0) 2.25%, #FFF4EA 56.99%)',
        'bannerGd':'linear-gradient(90deg, rgba(255, 255, 255, 0) 2.39%, rgba(255, 255, 255, 0.132) 50.12%, rgba(255, 255, 255, 0) 98.37%)',
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        "loop-scroll2": "loop-scroll2 20s linear infinite",
        "loop-scroll3": "loop-scroll3 10s linear infinite",
        "loop-scroll4": "loop-scroll4 10s linear infinite",
        'loop-scroll5': 'loop-scroll5 30s linear infinite',
        'loop-scroll6': 'loop-scroll6 30s linear infinite',
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "loop-scroll2": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "loop-scroll3": {
          from: { transform: "translateY(-100%)" },  // Starts off-screen (above the container)
          to: { transform: "translateY(0)" },       // Moves to the original position
        },
        "loop-scroll4": {
          from: { transform: "translateY(0)" },     // Starts at the original position
          to: { transform: "translateY(-100%)" },   // Moves off-screen (above the container)
        },
        'loop-scroll5': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'loop-scroll6': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        }
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.bannerText': {
        background: 'linear-gradient(90deg, #A36CF0 0%, #FF76AE 49%, #FFA674 100%)',
        '-webkit-text-fill-color': 'transparent',
        '-webkit-background-clip': 'text',
      },
      '.text-gradient': {
        background: 'linear-gradient(90deg, #654AFD 0%, #E74CF4 112.33%)',
        '-webkit-text-fill-color': 'transparent',
        '-webkit-background-clip': 'text',
      },
        '.border-gradient-1': {
          position: 'relative',
          borderRadius: '6px',
          overflow: 'hidden', /* Ensure the content is clipped by the border radius */
        },
        '.border-gradient-1::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: 'inherit',
          padding: '1px', /* Adjust the border width */
          background: 'linear-gradient(92.35deg, rgba(163, 108, 240, 0.2) 1.71%, rgba(255, 118, 174, 0.2) 49.03%, rgba(255, 166, 116, 0.2) 98.29%)',
          webkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          webkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        },
        '.border-gradient-2': {
          position: 'relative',
          borderRadius: '6px',
          overflow: 'hidden', /* Ensure the content is clipped by the border radius */
        },
        '.border-gradient-2::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: 'inherit',
          padding: '1px', /* Adjust the border width */
          background: 'linear-gradient(90deg, rgba(102, 74, 254, 0.4) 0%, rgba(215, 76, 245, 0.4) 100%)',
          webkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          webkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        },
    })
  },
],
}