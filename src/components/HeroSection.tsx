import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Star, GitBranch } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center space-y-10 py-24 md:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <Badge variant="outline" className="px-3 py-1">
          ✨ 欢迎来到 Fuyun.dev
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          构建卓越的
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            {' '}数字体验
          </span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          专注于前端开发、UI/UX设计和现代Web技术。分享技术心得，探索创新解决方案。
        </p>
      </div>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="gap-2">
          查看我的项目
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="gap-2">
          <Download className="h-4 w-4" />
          下载简历
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
        <Card className="group hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <GitBranch className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold">开源项目</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              参与和维护多个开源项目，致力于推动技术社区发展
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Star className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold">技术博客</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              分享前端开发经验、最佳实践和新技术探索
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Download className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold">资源分享</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              提供实用的开发工具、组件库和学习资源
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
