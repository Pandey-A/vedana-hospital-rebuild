"use client";
import { FC } from "react";

const YouTubeSection: FC = () => {
  const videos = [
    {
      id: "PXImrU-yLw0",
      url: "https://youtu.be/PXImrU-yLw0",
      title: "Patient Success Story",
      thumbnail: `https://img.youtube.com/vi/PXImrU-yLw0/maxresdefault.jpg`
    },
    {
      id: "zfxLtBnCfXM",
      url: "https://youtu.be/zfxLtBnCfXM",
      title: "IVF Journey Testimonial",
      thumbnail: `https://img.youtube.com/vi/zfxLtBnCfXM/maxresdefault.jpg`
    },
    {
      id: "S9t0byU90_s",
      url: "https://youtu.be/S9t0byU90_s",
      title: "Happy Family Story",
      thumbnail: `https://img.youtube.com/vi/S9t0byU90_s/maxresdefault.jpg`
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Patient Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear directly from our patients about their journey to parenthood
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Video Thumbnail/Embed Container */}
              <div className="relative aspect-video bg-gray-200">
                {/* YouTube Embed */}
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Watch on YouTube
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-700 text-lg mb-6">
            Ready to start your own success story?
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
            Book Your Consultation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;