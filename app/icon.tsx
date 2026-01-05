import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0066CC',
          borderRadius: '50%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          {/* Letter "I" */}
          <div
            style={{
              width: '4px',
              height: '18px',
              background: 'white',
              borderRadius: '2px',
            }}
          />
          {/* Letter "L" */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div
              style={{
                width: '4px',
                height: '14px',
                background: 'white',
                borderRadius: '2px',
              }}
            />
            <div
              style={{
                width: '10px',
                height: '4px',
                background: 'white',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
