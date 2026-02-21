import { useParams, useNavigate, Link } from "react-router-dom";

const blogs = [
  {
    slug: "newspaper-background-quote-prompt",
    title: "Newspaper Style Poster Prompt",
    date: "Feb 2026",
    images: [
      "/poster-newspaper.png",
    ],
    prompt: `Create a high quality wall poster in A4 size for me.
I want the following:

1) Create a sepia shaded newspaper background for old looks,
   the newspaper name is <your name>,
   and include small unreadable font to make it look like a background.

2) Write text over it: <your text>
   such as it looks spray painted in <your color> colour.

The finish should be very royal, but just a few drops of paint here and there are good.`,
  },
];

export default function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
        <button
          onClick={() => navigate("/thoughts")}
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">

        {/* Back Link */}
        <Link
          to="/blog"
          className="text-sm text-gray-600 hover:text-black underline mb-6 inline-block"
        >
          ← Back to Blogs
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-500 mb-8">{blog.date}</p>

        {/* Image 1 */}
        <img
          src={blog.images[0]}
          alt=""
          className="rounded-xl mb-6 w-full"
        />

        {/* Prompt */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">
            📌 Copy This Prompt
          </h2>
          <pre className="whitespace-pre-wrap text-sm leading-relaxed">
            {blog.prompt}
          </pre>
        </div>

        {/* Image 2 */}
        <img
          src={blog.images[1]}
          alt=""
          className="rounded-xl mb-8 w-full"
        />

        {/* Image 3 */}
        <img
          src={blog.images[2]}
          alt=""
          className="rounded-xl mb-10 w-full"
        />

        {/* Copy Button */}
        <div className="text-center mb-10">
          <button
            onClick={() => navigator.clipboard.writeText(blog.prompt)}
            className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Copy Prompt
          </button>
        </div>

        {/* Developer CTA */}
        <div className="border-t pt-6 text-center">
          <p className="text-gray-600 mb-2">
            Enjoyed this prompt?
          </p>
          <Link
            to="/"
            className="font-semibold underline hover:text-gray-700"
          >
            👋 Meet the Developer
          </Link>
        </div>

      </div>
    </div>
  );
}