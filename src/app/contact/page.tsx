"use client"
import Image from "next/image";

const ContactPage = () => {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      minHeight: '100vh',
      padding: '2rem 1rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Twitter Column */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <a 
            href="https://x.com/RishiGupta786?t=z_Y2Sgnjs8F3fJhDXYcFlA&s=080" 
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              width: '100%'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '300px',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/asset/twitter.png"
                alt="twitter" 
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <p style={{ 
              textAlign: 'center', 
              color: 'white',
              marginTop: '1rem',
              fontSize: '1.25rem',
              fontWeight: '500'
            }}>
              TWITTER
            </p>
          </a>
        </div>
        
        {/* LinkedIn Column */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <a 
            href="https://www.linkedin.com/in/rishi-gupta-ba5609296/" 
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              width: '100%'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '300px',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <Image
                src="/asset/in.png" 
                alt="linkedin" 
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <p style={{ 
              textAlign: 'center', 
              color: 'white',
              marginTop: '1rem',
              fontSize: '1.25rem',
              fontWeight: '500'
            }}>
              LINKEDIN
            </p>
          </a>
        </div>
        
        {/* Instagram Column */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <a 
            href="https://www.instagram.com/rishi__gupt_a/?utm_source=qr&igsh=MXBzcWtra29oYnI0OA%3D%3D" 
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              width: '100%'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '300px',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/asset/i.png" 
                alt="instagram" 
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <p style={{ 
              textAlign: 'center', 
              color: 'white',
              marginTop: '1rem',
              fontSize: '1.25rem',
              fontWeight: '500'
            }}>
              INSTAGRAM
            </p>
          </a>
        </div>
      </div>
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap');
          
          a:hover, a:focus {
            color: white;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default ContactPage;