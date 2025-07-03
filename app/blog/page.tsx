"use client"

import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { articles } from "@/lib/articles"
import Squares from "@/components/ui/squares"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Animated Background */}
      <Squares 
        speed={0.3}
        squareSize={60}
        direction="diagonal"
        borderColor="rgba(156, 163, 175, 0.5)"
        hoverFillColor="rgba(59, 130, 246, 0.1)"
      />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 rounded-full overflow-hidden block">
            <Image 
              src="/avatar.jpg" 
              alt="Fuyun头像" 
              width={40} 
              height={40} 
              className="w-full h-full object-cover"
            />
          </Link>
          <Link href="/">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>返回首页</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-24 md:pt-32 pb-12 md:pb-16 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">技术博客</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            分享前端开发、技术写作和工具使用的心得体会，记录技术成长的点点滴滴
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center mb-6 md:mb-8">
            <div className="w-1 h-6 md:h-8 bg-blue-500 mr-3 md:mr-4"></div>
            <h2 className="text-xl md:text-2xl font-bold">精选文章</h2>
          </div>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
            <Link href={`/blog/${articles[0].slug}`}>
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-video md:aspect-square md:h-80 bg-gray-100 overflow-hidden">
                    <Image
                      src={articles[0].image}
                      alt={articles[0].title}
                      width={400}
                      height={320}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      精选
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {articles[0].date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {articles[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{articles[0].title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {articles[0].tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center mb-6 md:mb-8">
            <div className="w-1 h-6 md:h-8 bg-green-500 mr-3 md:mr-4"></div>
            <h2 className="text-xl md:text-2xl font-bold">最新文章</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Link href={`/blog/${article.slug}`}>
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="font-bold mb-3 text-lg group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {article.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{article.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="px-6 md:px-8 py-3">
            加载更多文章
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">© 2025 Designed By Fuyun</p>
        </div>
      </footer>
    </div>
  )
} 