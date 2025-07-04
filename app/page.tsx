"use client"

import { Moon, Code, ExternalLink, MessageCircle, Github, Mail, ArrowUp, Menu, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"
import { getLatestArticles } from "@/lib/articles"
import { useState, useEffect } from "react"
import Squares from "@/components/ui/squares"
import ProfileCard from "@/components/ProfileCard"

export default function Portfolio() {
  const latestArticles = getLatestArticles(9)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div className="min-h-screen bg-white scroll-smooth relative">
      {/* Animated Background */}
      <Squares 
        speed={0.3}
        squareSize={60}
        direction="diagonal"
        borderColor="rgba(156, 163, 175, 0.5)"
        hoverFillColor="rgba(59, 130, 246, 0.1)"
      />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out">
        <div className={`mx-auto transition-all duration-500 ease-in-out flex items-center justify-between ${
          isScrolled 
            ? 'mt-4 max-w-2xl bg-white/95 backdrop-blur-xl rounded-full shadow-lg border border-white/20 px-6 py-2' 
            : 'mt-2 max-w-6xl bg-white/70 backdrop-blur-xl rounded-2xl shadow-sm border border-white/20 px-6 py-3'
        }`}>
          <Link href="#hero" className={`group rounded-full overflow-hidden block transition-all duration-300 relative ${
            isScrolled 
              ? 'w-8 h-8 hover:scale-110' 
              : 'w-10 h-10 hover:scale-105 hover:shadow-md'
          }`}>
            <Image 
              src="/avatar.jpg" 
              alt="Fuyun头像" 
              width={40} 
              height={40} 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center transition-all duration-300 ${
            isScrolled ? 'space-x-2' : 'space-x-6'
          }`}>
            <Link href="#hero" className={`text-gray-600 hover:text-black transition-all duration-300 relative group ${
              isScrolled 
                ? 'text-sm px-3 py-1.5 rounded-full hover:bg-white/50' 
                : 'px-4 py-2 rounded-xl hover:bg-white/30 hover:backdrop-blur-sm'
            }`}>
              <span className="relative z-10">首页</span>
              {!isScrolled && <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50/0 via-blue-50/20 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
            </Link>
            <Link href="#about" className={`text-gray-600 hover:text-black transition-all duration-300 relative group ${
              isScrolled 
                ? 'text-sm px-3 py-1.5 rounded-full hover:bg-white/50' 
                : 'px-4 py-2 rounded-xl hover:bg-white/30 hover:backdrop-blur-sm'
            }`}>
              <span className="relative z-10">关于</span>
              {!isScrolled && <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-50/0 via-green-50/20 to-green-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
            </Link>
            <Link href="#portfolio" className={`text-gray-600 hover:text-black transition-all duration-300 relative group ${
              isScrolled 
                ? 'text-sm px-3 py-1.5 rounded-full hover:bg-white/50' 
                : 'px-4 py-2 rounded-xl hover:bg-white/30 hover:backdrop-blur-sm'
            }`}>
              <span className="relative z-10">作品</span>
              {!isScrolled && <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-50/0 via-purple-50/20 to-purple-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
            </Link>
            <Link href="#blog" className={`text-gray-600 hover:text-black transition-all duration-300 relative group ${
              isScrolled 
                ? 'text-sm px-3 py-1.5 rounded-full hover:bg-white/50' 
                : 'px-4 py-2 rounded-xl hover:bg-white/30 hover:backdrop-blur-sm'
            }`}>
              <span className="relative z-10">文章</span>
              {!isScrolled && <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-50/0 via-orange-50/20 to-orange-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
            </Link>
            <Link href="#contact" className={`text-gray-600 hover:text-black transition-all duration-300 relative group ${
              isScrolled 
                ? 'text-sm px-3 py-1.5 rounded-full hover:bg-white/50' 
                : 'px-4 py-2 rounded-xl hover:bg-white/30 hover:backdrop-blur-sm'
            }`}>
              <span className="relative z-10">联系</span>
              {!isScrolled && <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-50/0 via-pink-50/20 to-pink-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
            </Link>
          </nav>
          
          <div className={`flex items-center transition-all duration-300 ${
            isScrolled ? 'space-x-1' : 'space-x-3'
          }`}>
            <Button 
              variant="ghost" 
              size={isScrolled ? "sm" : "icon"} 
              className={`group rounded-full transition-all duration-300 relative overflow-hidden ${
                isScrolled 
                  ? 'w-8 h-8 p-1 hover:bg-white/50' 
                  : 'hover:bg-white/30 hover:backdrop-blur-sm hover:scale-105'
              }`}
            >
              <Moon className={`transition-all duration-300 relative z-10 ${
                isScrolled ? 'w-4 h-4' : 'w-5 h-5'
              }`} />
              {!isScrolled && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-50/0 via-indigo-50/30 to-indigo-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size={isScrolled ? "sm" : "icon"}
              className={`md:hidden group rounded-full transition-all duration-300 relative overflow-hidden ${
                isScrolled 
                  ? 'w-8 h-8 p-1 hover:bg-white/50' 
                  : 'hover:bg-white/30 hover:backdrop-blur-sm hover:scale-105'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? 
                <X className={`transition-all duration-300 relative z-10 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} /> : 
                <Menu className={`transition-all duration-300 relative z-10 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
              }
              {!isScrolled && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-50/0 via-gray-50/30 to-gray-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-lg z-40 transition-all duration-300 ${
            isScrolled 
              ? 'top-full left-4 right-4 rounded-2xl mt-2' 
              : 'top-full left-0 right-0 border-b border-t-0 border-l-0 border-r-0'
          }`}>
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
      <section id="hero" className="max-w-6xl mx-auto px-4 pt-24 md:pt-32 pb-12 md:pb-20 relative z-10">
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
                Geek
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 md:px-4 md:py-2">
                AI
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 md:px-4 md:py-2">
                Tech
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
            <ProfileCard
              name="Fuyun"
              title="Tech Writer"
              handle="fuyun"
              status="正在创作中"
              contactText="联系我"
              avatarUrl="/avatar.jpg"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative z-10">
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
      <section id="portfolio" className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative z-10">
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
      <section id="blog" className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative z-10">
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
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">联系方式</h2>
        <p className="text-gray-600 mb-8 md:mb-12 max-w-2xl text-sm md:text-base">
          无论您是想讨论项目合作、技术咨询，还是单纯想交流技术话题，都欢迎随时联系我。
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">联系合作</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">随时欢迎</span>
            </div>
            <p className="text-gray-600 mb-6">
              我很乐意听取新项目和机会的建议。无论是全职机会、自由职业项目还是技术咨询，都欢迎与我联系。
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">技术讨论</p>
                  <p className="text-xs text-gray-600">分享技术见解与经验</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50">
                <Github className="w-5 h-5 text-gray-800" />
                <div>
                  <p className="text-sm font-medium">项目合作</p>
                  <p className="text-xs text-gray-600">开源项目与技术开发</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50">
                <Mail className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">商务咨询</p>
                  <p className="text-xs text-gray-600">技术写作与内容创作</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                通过任意方式联系 · 24小时内回复
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">友情链接</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">2 个友链</span>
            </div>
            <p className="text-gray-600 mb-6">
              优质的技术网站和工具推荐，与我一起探索技术世界的精彩内容。
            </p>
            <div className="space-y-3">
              <a 
                href="https://www.glbgpt.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 group-hover:scale-105 transition-transform">
                  <Image
                    src="/globalgpt-logo.svg"
                    alt="GlobalGPT Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">GlobalGPT</h4>
                  <p className="text-sm text-gray-600">多合一AI平台，智能对话新体验</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>

              <a 
                href="https://www.proofreadingai.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 border border-green-200 group-hover:scale-105 transition-transform">
                  <Image
                    src="/proofreading-logo.svg"
                    alt="Proofreading AI Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Proofreading AI</h4>
                  <p className="text-sm text-gray-600">免费AI校对工具，提升写作质量</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                欢迎优质网站交换友链 · 邮箱联系
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 relative z-10">
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
