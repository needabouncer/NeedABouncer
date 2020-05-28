export const linkResolver = function linkResolver(doc) {
    // Route for blog posts
    if (doc.type === "page") {
      return "/" + doc.uid
    }
    // Homepage route fallback
    return "/"
  }