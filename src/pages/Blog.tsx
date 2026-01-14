import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useBlogPosts } from "@/hooks/useSanityBlog";

const Blog = () => {
  const { data: blogPosts = [], isLoading } = useBlogPosts();
  
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our <span className="text-gradient">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Insights, strategies, and best practices for modern recruitment agencies
          </motion.p>
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-6xl flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </section>
      )}

      {/* Featured Post */}
      {!isLoading && featuredPost && (
        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Link to={`/blog/${featuredPost.id}`} className="block">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 p-4 md:p-6">
                  {/* Image */}
                  <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-2xl overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-1/2 flex flex-col justify-center py-2 lg:py-6 lg:pr-4">
                    {/* Category */}
                    <span className="inline-block w-fit px-4 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full uppercase tracking-wider mb-4">
                      {featuredPost.category}
                    </span>
                    
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                          <User size={12} className="text-primary" />
                        </div>
                        <span className="font-medium">{featuredPost.author}</span>
                      </div>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    
                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    {/* Read More */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                      Read Article
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      {!isLoading && otherPosts.length > 0 && (
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="w-12 h-0.5 bg-primary rounded-full" />
              <h2 className="text-xl font-bold text-muted-foreground uppercase tracking-wider">More Articles</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {otherPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`} className="block h-full">
                    <div className="h-full bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                      {/* Image */}
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-5 md:p-6 flex flex-col">
                        {/* Category */}
                        <span className="inline-block w-fit px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full uppercase tracking-wider mb-3">
                          {post.category}
                        </span>
                        
                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                          {post.excerpt}
                        </p>
                        
                        {/* Meta */}
                        <div className="flex items-center gap-3 text-xs text-muted-foreground pt-4 border-t border-border/50">
                          <span className="flex items-center gap-1.5">
                            <User size={12} />
                            {post.author}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                          <span className="ml-auto flex items-center gap-1.5">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default Blog;
