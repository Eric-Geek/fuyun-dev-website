"use client"

import { Moon, Code, ExternalLink, MessageCircle, Github, Mail, Globe, ArrowUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">
              首页
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">
              关于
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">
              作品
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">
              文章
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">
              联系
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Moon className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">你好，我是</span>
            </div>
            <h1 className="text-7xl font-bold mb-6">Jimmy</h1>
            <h2 className="text-2xl text-gray-600 mb-8">全栈开发工程师</h2>
            <p className="text-gray-600 mb-10 max-w-lg leading-relaxed text-lg">
              专注于打造高质量的数字体验，运用现代化的网络技术构建可扩展用户友好的应用程序。拥有
              丰富的全栈开发经验，致力于创造优质的用户体验和高性能的技术解决方案。
            </p>
            <div className="flex items-center space-x-4 mb-10">
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-4 py-2">
                React
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-4 py-2">
                Vue
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-4 py-2">
                TypeScript
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3">联系我</Button>
              <Button variant="outline" className="px-6 py-3 bg-transparent">
                查看项目
              </Button>
            </div>
          </div>
          <div className="ml-20">
            <Card className="w-72 h-80 bg-gradient-to-br from-purple-900 to-blue-900 text-white relative overflow-hidden shadow-2xl">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div className="flex justify-end">
                  <Code className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-2">JIMMY</h3>
                  <p className="text-sm opacity-90">SOFTWARE DEVELOPER</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs">😊</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">关于我</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">专业技能</h3>
            <p className="text-gray-600 leading-relaxed">
              我是一名全栈开发工程师，主攻 Java 后端、前端 React、MySQL、Redis 等技术栈，拥有丰富的项目开发经
              验。熟悉前端开发框架和技术，精通后端开发技术，具备良好的数据库设计和优化能力。同时具备
              良好的团队协作能力和沟通能力，能够快速适应新技术和新环境。热爱编程，喜欢钻研新技术，致力
              于产品质量的持续提升，努力为用户提供更好的产品体验和服务质量。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">技术专长</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">后端技术 Java / SpringBoot</span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">前端框架 Vue.js / React</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">数据库 MySQL</span>
                  <span className="text-sm text-gray-500">70%</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">服务器运维技术 Go / Dockerfile / WGSL</span>
                  <span className="text-sm text-gray-500">60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">个人作品</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Jimmy blog"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Jimmy blog</h3>
                <p className="text-sm text-gray-600 mb-4">基于Next.js搭建的个人博客</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-600">Next.js</span>
                  <span className="text-green-600">JavaScript</span>
                  <span className="text-purple-600">TypeScript CSS</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-900 rounded-t-lg overflow-hidden flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">GO TODO</h3>
                  <p className="text-sm opacity-75">Todo list CLI工具</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">GO TODO</h3>
                <p className="text-sm text-gray-600 mb-4">Todo list CLI工具</p>
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
                  alt="NextForge"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">NextForge</h3>
                <p className="text-sm text-gray-600 mb-4">Next.js人工智能生成工具</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-600">Next.js</span>
                  <span className="text-green-600">TypeScript CSS</span>
                  <span className="text-purple-600">React UI</span>
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
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">最新博客</h2>
          <Link href="#" className="text-blue-600 hover:underline flex items-center">
            更多 <ExternalLink className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">我的 AI 的实际，有点意思</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                自从 ChatGPT 出现以来，我就一个一个地一一体验了各种 AI 工具，从最开始的 ChatGPT，到后来的 Claude、Gemini
                等等，再到现在的各种 AI 编程工具，比如 Cursor、 V0、一键生成、AI 编程助手、AI 绘画工具、AI
                音频工具等等。
              </p>
              <Link href="#" className="text-blue-600 hover:underline text-sm">
                阅读全文 →
              </Link>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">BrowseBase 的设计思路</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                最近在做的项目，BrowseBase 是一个一站式的在线收藏夹管理工具，
                旨在帮助用户更好地管理和组织他们的网络收藏。通过直观的界面和强大的功能，用户可以轻松地保存、分类和搜索他们喜欢的网站和资源。
              </p>
              <Link href="#" className="text-blue-600 hover:underline text-sm">
                阅读全文 →
              </Link>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">终端、Todo、命令</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                ADHD 的，我总是忘记一些事情，所以我需要一个 Todo
                应用来帮助我记住要做的事情。作为一个开发者，我大部分时间都在终端中工作，所以我想要一个可以在终端中使用的
                Todo 应用。于是我用 Go 写了一个简单的 Todo CLI 工具。
              </p>
              <Link href="#" className="text-blue-600 hover:underline text-sm">
                阅读全文 →
              </Link>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">写了，高效编程</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Hacker News 上看到这个 vscode 下的一个插件，叫做
                Tldraw，它是一个在线的白板工具，可以让你在浏览器中画图、做笔记、制作流程图等等。我觉得这个工具很有意思，所以我想试试看能不能在
                vscode 中使用它。
              </p>
              <Link href="#" className="text-blue-600 hover:underline text-sm">
                阅读全文 →
              </Link>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">AI编程，但产品的标准化</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                最近"AI编程"这个概念很火，很多人都在讨论 AI
                是否会取代程序员。我觉得这个问题很有意思，所以我想分享一下我的看法。首先，我认为 AI
                不会完全取代程序员，但是它会改变程序员的工作方式。
              </p>
              <Link href="#" className="text-blue-600 hover:underline text-sm">
                阅读全文 →
              </Link>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">等开发运维的一些，比较简单 Lv10</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                在 Vercel 上部署应用是一个非常简单的过程，但是有一些细节需要注意。在这篇文章中，我将分享一些我在使用
                Vercel 部署应用时遇到的问题和解决方案，希望能够帮助到其他开发者。
              </p>
              <Link href="#" className="text-blue-600 hover:underline text-sm">
                阅读全文 →
              </Link>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">动态网站参考案例（用于AI训练）</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                这是一个动态网站的参考案例，主要用于 AI 训练。在这个案例中，我将展示如何使用 Next.js、React 和
                TypeScript 来构建一个现代化的动态网站。这个网站包含了常见的功能，如用户认证、数据管理、响应式设计等。
              </p>
              <Link href="#" className="text-blue-600 hover:underline text-sm">
                阅读全文 →
              </Link>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Vite Coding：基于AI的代码生成工具</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Vite Coding
                是一个基于人工智能的代码生成工具，它可以帮助开发者快速生成高质量的代码。通过自然语言描述，开发者可以快速生成各种类型的代码，包括
                React 组件、API 接口、数据库模型等。
              </p>
              <Link href="#" className="text-blue-600 hover:underline text-sm">
                阅读全文 →
              </Link>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">产品、测评</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                作为一个开发者，我经常需要测试和评估各种工具和产品。在这篇文章中，我将分享一些我最近测试的产品和工具，包括它们的优缺点、使用体验和推荐程度。希望这些信息能够帮助其他开发者做出更好的选择。
              </p>
              <Link href="#" className="text-blue-600 hover:underline text-sm">
                阅读全文 →
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="text-blue-600 hover:underline">
            查看更多文章 →
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">联系方式</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          无论您是想讨论项目合作、技术咨询，还是单纯想交流技术话题，都欢迎随时联系我。
        </p>

        <div className="grid md:grid-cols-2 gap-12">
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
                <Globe className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">友情链接</h3>
              <span className="text-sm text-gray-500">共 4 个友链</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                  O
                </div>
                <div>
                  <h4 className="font-medium">Oscar Hernandez</h4>
                  <p className="text-sm text-gray-600">一位专门的产品经理</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  L
                </div>
                <div>
                  <h4 className="font-medium">liruifengv</h4>
                  <p className="text-sm text-gray-600">Web 开发者，Astro 爱好者</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div>
                  <h4 className="font-medium">Aaron Conlon</h4>
                  <p className="text-sm text-gray-600">全栈技术专家人员</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                  L
                </div>
                <div>
                  <h4 className="font-medium">Leetao</h4>
                  <p className="text-sm text-gray-600">后端工程师，写有趣的</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <p className="text-gray-600 text-sm">© 2025 Designed By Jimmy</p>
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
