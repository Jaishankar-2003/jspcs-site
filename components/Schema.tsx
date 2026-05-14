export default function Schema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",

        name: "JSPCS Online",

        url: "https://jspcs.online",

        logo: "https://jspcs.online/logo.png",

        image: "https://jspcs.online/logo.png",

        description:
            "Laptop repair, PC repair, chip-level servicing, custom gaming PC builds, and computer AMC services across Tamil Nadu.",

        areaServed: [
            "Chennai",
            "Madurai",
            "Tamil Nadu"
        ],

        address: {
            "@type": "PostalAddress",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
        },

        serviceType: [
            "Laptop Repair",
            "Desktop Repair",
            "Chip-Level Service",
            "Custom PC Build",
            "Gaming PC Service",
            "AMC Services",
        ],

        sameAs: [
            "https://www.instagram.com/",
            "https://www.facebook.com/"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    )
}