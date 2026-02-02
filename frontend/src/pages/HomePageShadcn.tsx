import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { BookOpen, User, Grid3X3, Globe, Info, Volume2, Bot, BarChart3, GraduationCap, Sun, Moon } from 'lucide-react'

export function HomePageShadcn() {
  const [isDark, setIsDark] = useState(() => {
    // Default to dark mode
    document.documentElement.classList.add('dark')
    return true
  })

  const toggleDark = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-4xl mx-auto flex h-14 items-center justify-between px-4">
          <Link to="/home" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">HK</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">Hinbuna Kurdî</span>
          </Link>

          <nav className="flex items-center gap-1">
            <Button variant="ghost" size="icon" title="Courses">
              <BookOpen className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" title="Login">
              <User className="h-5 w-5" />
            </Button>

            {/* Apps Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" title="Apps">
                  <Grid3X3 className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="grid grid-cols-2 gap-2 p-2">
                  {[
                    { icon: '📖', name: 'Dictionary' },
                    { icon: '📚', name: 'Short Stories' },
                    { icon: '📊', name: 'Grammar' },
                    { icon: '🧩', name: 'Puzzles' },
                    { icon: '🔊', name: 'TTS' },
                    { icon: '💡', name: 'More...' },
                  ].map((app, i) => (
                    <DropdownMenuItem key={i} className="flex flex-col items-center p-3 cursor-pointer">
                      <span className="text-2xl mb-1">{app.icon}</span>
                      <span className="text-xs">{app.name}</span>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" title="Language">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {['🇩🇪 Deutsch', '🇬🇧 English', '🇹🇷 Türkçe', '🇸🇪 Svenska'].map((lang, i) => (
                  <DropdownMenuItem key={i}>{lang}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" title="About">
              <Info className="h-5 w-5" />
            </Button>

            {/* Dark Mode Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleDark} title="Toggle theme">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Kurdî Hînbibe
            <span className="block text-primary">Bi Awayekî Asan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Bi dersên kurt û pratîk, ji A1 heta B1 Kurmancî fêr bibe. Roj bi roj pêşve biçe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Destpêke – Belaş e
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Bêtir Fêrbibe
            </Button>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        {/* Features Section */}
        <section className="max-w-4xl mx-auto px-4 md:px-6 py-16">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: <GraduationCap className="h-10 w-10" />,
                title: 'UI Hêsan',
                desc: 'Ekranên paqij, nivîsên mezin, û bêyî tevlihevî ku tu tenê li hînbûnê bifikire.',
              },
              {
                icon: <BookOpen className="h-10 w-10" />,
                title: 'Dersên Strukturî',
                desc: 'Diyalog, ferheng, û rêziman di yekîneyên piçûk de bi kontrolên tavilê.',
              },
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: 'Pêşveçûnê Bişopîne',
                desc: 'XP, streak, û temamkirina yekîneyan — ji cihê ku mayî dest pê bike.',
              },
              {
                icon: <Bot className="h-10 w-10" />,
                title: 'AI Mamoste',
                desc: 'Dema ku hîn dibî pirsên xwe ji mamosteyê AI bipirse.',
              },
              {
                icon: <Volume2 className="h-10 w-10" />,
                title: 'Dengbêjî Li Her Derê',
                desc: 'Ji bo her hevokê dengê bilind-kalîte lêxe — tevî nivîsên xwe.',
              },
            ].map((feature, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow w-full max-w-sm">
                <CardHeader>
                  <div className="mx-auto mb-2 text-primary">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        {/* Info Section */}
        <section className="max-w-4xl mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📘 Pirtûka Fermî
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Tu dikarî pirtûkê li vir bikî:</p>
                <a
                  href="https://www.kurdisch-lernen.de/product/kurdisch-lehrbuch-zusatzbuch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium block"
                >
                  ez ji te hez dikim, ez kurdi hin dibim
                </a>
                <img
                  src="https://www.kurdisch-lernen.de/wp-content/uploads/2020/08/Lehr-und-Zusatzbuch.webp"
                  alt="Kurdish Book"
                  className="w-28 rounded-lg border mt-4"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📚 Dersên Zindî
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Naveroka kursa xwe bi dersên yek-bi-yek an komî bişopîne — online an şexsî!
                </p>
                <p className="text-muted-foreground">📌 Bihayê û formatan li vir bibîne:</p>
                <a
                  href="https://www.kurdisch-lernen.de/preise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium block"
                >
                  💰 kurdisch-lernen.de/preise/
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation Links */}
        <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 text-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/showcase">
              <Button variant="secondary">
                → Hemû Komponenetan Bibîne (Showcase)
              </Button>
            </Link>
            <Link to="/home-old">
              <Button variant="outline" size="sm">
                Sêwirana Kevn (with theme selector)
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:h-14 px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            © 2025 Adar Schule. Hemû maf parastî ne.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
