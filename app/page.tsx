"use client"

import { Moon, Code, ExternalLink, MessageCircle, Github, Mail, ArrowUp, Menu, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"
import { getLatestArticles } from "@/lib/articles"
import { useState } from "react"

export default function Portfolio() {
  const latestArticles = getLatestArticles(9)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="border-b border-gray-100 relative">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="#hero" className="w-10 h-10 rounded-full overflow-hidden block">
            <Image 
              src="/avatar.jpg" 
              alt="Fuyun头像" 
              width={40} 
              height={40} 
              className="w-full h-full object-cover"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#hero" className="text-gray-600 hover:text-black transition-colors">
              首页
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-black transition-colors">
              关于
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-black transition-colors">
              作品
            </Link>
            <Link href="#blog" className="text-gray-600 hover:text-black transition-colors">
              文章
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-black transition-colors">
              联系
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Moon className="w-5 h-5" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
            <nav className="px-4 py-4 space-y-4">
              <Link 
                href="#hero" 
                className="block text-gray-600 hover:text-black transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                首页
              </Link>
              <Link 
                href="#about" 
                className="block text-gray-600 hover:text-black transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                关于
              </Link>
              <Link 
                href="#portfolio" 
                className="block text-gray-600 hover:text-black transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                作品
              </Link>
              <Link 
                href="#blog" 
                className="block text-gray-600 hover:text-black transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                文章
              </Link>
              <Link 
                href="#contact" 
                className="block text-gray-600 hover:text-black transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                联系
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-20">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">你好，我是</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Fuyun</h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6 md:mb-8">Tech Writer</h2>
            <p className="text-gray-600 mb-8 md:mb-10 max-w-lg leading-relaxed text-base md:text-lg">
              专注于技术写作和内容创作，运用现代化的技术工具和平台分享编程知识与经验。拥有
              丰富的技术背景和写作经验，致力于创造有价值的技术内容和优质的学习资源。
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8 md:mb-10">
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 md:px-4 md:py-2">
                React
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 md:px-4 md:py-2">
                Vue
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 md:px-4 md:py-2">
                TypeScript
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="#contact">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 w-full sm:w-auto">联系我</Button>
              </Link>
              <Link href="#portfolio">
                <Button variant="outline" className="px-6 py-3 bg-transparent w-full sm:w-auto">
                  查看项目
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Card className="w-64 h-72 md:w-72 md:h-80 bg-gradient-to-br from-slate-50 to-gray-100 border-0 relative overflow-hidden shadow-xl">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white">
                      <Image
                        src="/avatar.jpg"
                        alt="Fuyun头像"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Fuyun</h3>
                  <p className="text-sm text-gray-600 mb-4">Tech Writer</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500">正在创作中</span>
                  </div>
                </div>
                <div className="absolute top-4 left-6">
                  <div className="text-xs text-gray-400 font-mono">
                    #TechWriter
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">关于我</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">专业领域</h3>
            <p className="text-gray-600 leading-relaxed">
              我是一名技术写作者，专注于前端开发、全栈技术和开发工具的内容创作。拥有丰富的编程经
              验和技术写作背景，善于将复杂的技术概念转化为易懂的文档和教程。熟悉前端开发技术栈，
              精通技术文档写作，具备良好的内容策划和创作能力。同时具备良好的社区运营经验和沟通能力，
              能够为开发者社区贡献有价值的技术内容。热爱分享，致力于帮助更多开发者成长。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">技术与写作</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">技术写作 / 文档编写</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">前端开发 Vue.js / React</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">内容策划 / 社区运营</span>
                  <span className="text-sm text-gray-500">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">开发工具 / 工作流优化</span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">个人作品</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Fuyun.dev"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Fuyun.dev</h3>
                <p className="text-sm text-gray-600 mb-4">基于Next.js搭建的技术博客</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-600">Next.js</span>
                  <span className="text-green-600">TypeScript</span>
                  <span className="text-purple-600">Tailwind CSS</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-900 rounded-t-lg overflow-hidden flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Tech Docs</h3>
                  <p className="text-sm opacity-75">技术文档模板库</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Tech Docs</h3>
                <p className="text-sm text-gray-600 mb-4">现代化技术文档模板和写作指南</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-600">Markdown</span>
                  <span className="text-green-600">VitePress</span>
                  <span className="text-purple-600">Writing</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="BrowseBase"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">BrowseBase</h3>
                <p className="text-sm text-gray-600 mb-4">在线收藏夹网站</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-600">TypeScript</span>
                  <span className="text-green-600">React</span>
                  <span className="text-purple-600">Supabase</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Content Studio"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Content Studio</h3>
                <p className="text-sm text-gray-600 mb-4">技术内容创作与管理平台</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-600">React</span>
                  <span className="text-green-600">TypeScript</span>
                  <span className="text-purple-600">CMS</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-900 rounded-t-lg overflow-hidden flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">GO SEARCH</h3>
                  <p className="text-sm opacity-75">搜索引擎聚合</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">GO Search</h3>
                <p className="text-sm text-gray-600 mb-4">搜索引擎聚合</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-600">Go</span>
                  <span className="text-green-600">Cobra</span>
                  <span className="text-purple-600">CLI</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-900 rounded-t-lg overflow-hidden flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">实战</h3>
                  <p className="text-sm opacity-75">一个学习编程的网站</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">实战</h3>
                <p className="text-sm text-gray-600 mb-4">一个学习编程的网站</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-600">React</span>
                  <span className="text-green-600">TypeScript CSS</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">最新博客</h2>
          <Link href="/blog" className="text-blue-600 hover:underline flex items-center text-sm md:text-base">
            更多 <ExternalLink className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {latestArticles.map((article) => (
            <Card key={article.id} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link href={`/blog/${article.slug}`} className="text-blue-600 hover:underline text-sm">
                  阅读全文 →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="text-blue-600 hover:underline">
            查看更多文章 →
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">联系方式</h2>
        <p className="text-gray-600 mb-8 md:mb-12 max-w-2xl text-sm md:text-base">
          无论您是想讨论项目合作、技术咨询，还是单纯想交流技术话题，都欢迎随时联系我。
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">让我们开始合作</h3>
            <p className="text-gray-600 mb-6">
              我很乐意听取新项目和机会的建议。无论是全职机会、自由职业项目还是技术咨询，都欢迎与我联系。
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">友情链接</h3>
              <span className="text-sm text-gray-500">共 2 个友链</span>
            </div>
            <div className="space-y-4">
              <a 
                href="https://www.glbgpt.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white border border-gray-200">
                  <Image
                    src="/globalgpt-logo.svg"
                    alt="GlobalGPT Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h4 className="font-medium">GlobalGPT</h4>
                  <p className="text-sm text-gray-600">多合一AI平台</p>
                </div>
              </a>

              <a 
                href="https://www.proofreadingai.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white border border-gray-200">
                  <Image
                    src="/proofreading-logo.svg"
                    alt="Proofreading AI Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Proofreading AI</h4>
                  <p className="text-sm text-gray-600">免费AI校对工具</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <p className="text-gray-600 text-sm">© 2025 Designed By Fuyun</p>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
