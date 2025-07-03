import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getArticleBySlug, articles } from "@/lib/articles"

// 生成静态参数
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 rounded-full overflow-hidden block">
            <Image 
              src="/avatar.jpg" 
              alt="Fuyun头像" 
              width={40} 
              height={40} 
              className="w-full h-full object-cover"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>所有文章</span>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>返回首页</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-48 md:h-64 lg:h-96 bg-gray-100 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          width={1200}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              {article.date}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime}
            </div>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span>分享</span>
            </Button>
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {article.content ? (
            <div 
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .split('\n')
                  .map(line => {
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.slice(3)}</h2>`
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-xl font-bold mt-4 mb-2">${line.slice(4)}</h3>`
                    }
                    if (line.startsWith('```')) {
                      if (line.length > 3) {
                        return `<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code class="language-${line.slice(3)}">`
                      } else {
                        return `</code></pre>`
                      }
                    }
                    if (line.startsWith('- ')) {
                      return `<li class="mb-1">${line.slice(2)}</li>`
                    }
                    if (line.trim() === '') {
                      return '<br/>'
                    }
                    return `<p class="mb-4 leading-relaxed">${line}</p>`
                  })
                  .join('')
              }}
            />
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">文章内容正在加载中...</p>
            </div>
          )}
        </div>

        {/* Author Info */}
        <div className="border-t border-gray-100 pt-8 mt-12">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image 
                src="/avatar.jpg" 
                alt="作者头像" 
                width={64} 
                height={64} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">{article.author}</h3>
              <p className="text-gray-600">Tech Writer & Frontend Developer</p>
              <p className="text-sm text-gray-500 mt-1">
                专注于技术写作和前端开发，分享编程知识与经验
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-100 pt-8 mt-12">
          <h3 className="text-2xl font-bold mb-6">相关文章</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {articles
              .filter(a => a.slug !== article.slug)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Card key={relatedArticle.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <Link href={`/blog/${relatedArticle.slug}`}>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                        <Image
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{relatedArticle.date}</span>
                          <span>{relatedArticle.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">© 2025 Designed By Fuyun</p>
        </div>
      </footer>
    </div>
  )
} 