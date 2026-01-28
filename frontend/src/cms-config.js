import CMS from 'netlify-cms-app';

// Hero Section Preview
const HeroPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return `
    <div style="background: linear-gradient(180deg, #0f0f10 0%, #1a1a1a 100%); padding: 60px 20px; text-align: center; min-height: 500px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
      <h1 style="font-family: 'Playfair Display', serif; font-size: 3.5rem; color: #fafaf8; margin-bottom: 1rem;">${data.title || ''}</h1>
      <p style="font-size: 1.5rem; color: #b8975a; margin-bottom: 1.5rem; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">${data.subtitle || ''}</p>
      <p style="font-size: 1.25rem; line-height: 1.8; color: #f5f1e8; max-width: 700px; margin-bottom: 2rem;">${data.description || ''}</p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        ${(data.buttons || []).map(btn => `
          <button style="padding: 1rem 2.5rem; background: ${btn.type === 'primary' ? '#b8975a' : 'transparent'}; color: ${btn.type === 'primary' ? '#0f0f10' : '#b8975a'}; border: 2px solid #b8975a; border-radius: 50px; font-size: 1rem; font-weight: 600; cursor: pointer;">${btn.text}</button>
        `).join('')}
      </div>
    </div>
  `;
};

// Services Preview
const ServicesPreview = ({ entry }) => {
  const services = entry.getIn(['data', 'services'])?.toJS() || [];
  return `
    <div style="background: #1a1a1a; padding: 60px 20px;">
      <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #fafaf8; text-align: center; margin-bottom: 3rem;">Our Services</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto;">
        ${services.map(service => `
          <div style="background: rgba(26, 26, 26, 0.6); border: 1px solid rgba(184, 151, 90, 0.2); border-radius: 12px; padding: 2.5rem; text-align: center;">
            <div style="width: 60px; height: 60px; margin: 0 auto 1.5rem; color: #b8975a;">⭐</div>
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #fafaf8;">${service.title || ''}</h3>
            <p style="font-size: 1rem; line-height: 1.7; color: #f5f1e8; opacity: 0.85;">${service.description || ''}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

// Memorial Services Preview
const MemorialPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return `
    <div style="background: #000; padding: 60px 20px;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #fafaf8; margin-bottom: 1.5rem;">${data.heading || ''}</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #f5f1e8; margin-bottom: 1.5rem;">${data.description || ''}</p>
        <p style="line-height: 1.8; color: #f5f1e8; margin-bottom: 2rem;">${data.subDescription || ''}</p>
        <h3 style="color: #b8975a; font-size: 1.75rem; margin-bottom: 1rem;">What's Included</h3>
        <ul style="list-style: none; padding: 0;">
          ${(data.features || []).map(feature => `
            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 0.75rem; color: #f5f1e8;">
              <span style="color: #b8975a;">✓</span>
              <span>${feature}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
};

// Event Services Preview
const EventPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return `
    <div style="background: #1a1a1a; padding: 60px 20px;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #fafaf8; margin-bottom: 1.5rem;">${data.heading || ''}</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #f5f1e8; margin-bottom: 1.5rem;">${data.description || ''}</p>
        <p style="line-height: 1.8; color: #f5f1e8; margin-bottom: 2rem;">${data.subDescription || ''}</p>
        <h3 style="color: #b8975a; font-size: 1.75rem; margin-bottom: 1rem;">What's Included</h3>
        <ul style="list-style: none; padding: 0;">
          ${(data.features || []).map(feature => `
            <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 0.75rem; color: #f5f1e8;">
              <span style="color: #b8975a;">✓</span>
              <span>${feature}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
};

// Pricing Preview
const PricingPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return `
    <div style="background: rgba(26, 26, 26, 0.6); border: 2px solid ${data.featured ? '#b8975a' : 'rgba(184, 151, 90, 0.2)'}; border-radius: 16px; padding: 3rem 2.5rem; text-align: center; max-width: 400px; margin: 2rem auto;">
      ${data.featured ? '<div style="position: absolute; top: 1.5rem; right: -2rem; background: #b8975a; color: #0f0f10; padding: 0.5rem 3rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; transform: rotate(45deg);">★ Popular</div>' : ''}
      <h3 style="font-size: 1.75rem; margin-bottom: 1rem; color: #fafaf8;">${data.name || ''}</h3>
      <div style="font-size: 3rem; font-weight: 700; color: #b8975a; margin-bottom: 0.5rem; font-family: 'Playfair Display', serif;">${data.price || ''}</div>
      <p style="font-size: 1rem; color: #f5f1e8; opacity: 0.7; margin-bottom: 2rem;">${data.period || ''}</p>
      <ul style="list-style: none; padding: 0; text-align: left; margin: 2rem 0;">
        ${(data.features || []).map(feature => `
          <li style="padding: 0.75rem 0; border-bottom: 1px solid rgba(184, 151, 90, 0.1); display: flex; align-items: center; gap: 0.75rem; color: #f5f1e8;">
            <span style="color: #b8975a;">✓</span>
            <span style="font-size: 0.875rem;">${feature}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
};

// Testimonial Preview
const TestimonialPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return `
    <div style="background: rgba(26, 26, 26, 0.6); border: 1px solid rgba(184, 151, 90, 0.2); border-radius: 12px; padding: 2.5rem; max-width: 500px; margin: 2rem auto;">
      <div style="color: #b8975a; margin-bottom: 1rem; opacity: 0.5;">❝</div>
      <p style="font-size: 1.125rem; line-height: 1.8; color: #f5f1e8; margin-bottom: 1.5rem; font-style: italic;">"${data.quote || ''}"</p>
      <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(184, 151, 90, 0.2);">
        <p style="font-weight: 600; color: #b8975a; margin-bottom: 0.25rem;">${data.author || ''}</p>
        <p style="font-size: 0.875rem; color: #f5f1e8; opacity: 0.7;">${data.role || ''}</p>
      </div>
    </div>
  `;
};

// Founder Preview
const FounderPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return `
    <div style="background: #000; padding: 60px 20px;">
      <div style="max-width: 1000px; margin: 0 auto;">
        ${(data.photos || []).slice(0, 1).map(photo => `
          <img src="${photo.url}" alt="${photo.alt}" style="width: 100%; max-width: 500px; height: 400px; object-fit: cover; border-radius: 12px; margin: 0 auto 2rem; display: block;" />
        `).join('')}
        <h3 style="font-family: 'Playfair Display', serif; font-size: 2rem; color: #b8975a; text-align: center;">${data.name || ''}</h3>
        <p style="font-size: 1.125rem; color: #f5f1e8; font-style: italic; text-align: center; margin-bottom: 2rem;">${data.title || ''}</p>
        ${(data.bio || []).map(paragraph => `
          <p style="color: #f5f1e8; line-height: 1.8; margin-bottom: 1.5rem;">${paragraph}</p>
        `).join('')}
      </div>
    </div>
  `;
};

// Portfolio Preview
const PortfolioPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return `
    <div style="background: rgba(26, 26, 26, 0.6); border: 1px solid rgba(184, 151, 90, 0.2); border-radius: 12px; overflow: hidden; max-width: 500px; margin: 2rem auto;">
      <div style="aspect-ratio: 16/9; background: #000; display: flex; align-items: center; justify-content: center; color: #b8975a;">
        ${data.type === 'video' ? '🎬 Video' : '📷 Photo'}
      </div>
      <div style="padding: 1.5rem;">
        <h3 style="font-size: 1.25rem; color: #fafaf8; margin-bottom: 0.5rem;">${data.title || ''}</h3>
        <p style="color: #b8975a; font-size: 0.875rem; text-transform: capitalize; margin-bottom: 1rem;">${data.category || ''}</p>
        ${data.description ? `<p style="color: #f5f1e8; font-size: 0.95rem; line-height: 1.6;">${data.description}</p>` : ''}
      </div>
    </div>
  `;
};

// Register all previews
CMS.registerPreviewTemplate('hero', HeroPreview);
CMS.registerPreviewTemplate('services-cards', ServicesPreview);
CMS.registerPreviewTemplate('memorial-services', MemorialPreview);
CMS.registerPreviewTemplate('event-services', EventPreview);
CMS.registerPreviewTemplate('pricing', PricingPreview);
CMS.registerPreviewTemplate('testimonials', TestimonialPreview);
CMS.registerPreviewTemplate('founder', FounderPreview);
CMS.registerPreviewTemplate('portfolio', PortfolioPreview);

// Custom preview styles
CMS.registerPreviewStyle(`
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #1a1a1a;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`, { raw: true });

export default CMS;
