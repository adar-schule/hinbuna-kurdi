import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Sun, Moon, Check, Lock, ChevronDown, BookOpen, User, Settings, LogOut } from 'lucide-react'

export function DesignShowcaseShadcn() {
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
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">shadcn/ui Showcase</h1>
          <p className="text-muted-foreground mb-4">
            Component-level preview with shadcn/ui. Kurdish chars: ç ê î ş û
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/home">
              <Button variant="secondary">← Rûpela Serê</Button>
            </Link>
            <Link to="/showcase-old">
              <Button variant="outline" size="sm">Showcase Kevn (with theme selector)</Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleDark}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <div className="space-y-12">
          {/* Buttons */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button size="lg">Large</Button>
              <Button size="sm">Small</Button>
              <Button disabled>Disabled</Button>
            </div>
          </section>

          <Separator />

          {/* Cards */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Course Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                      🇹🇯
                    </div>
                    <div>
                      <CardTitle>Kurmancî – Destpêk</CardTitle>
                      <CardDescription>A1-A2 • 6 modul • 48 ders</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={35} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">35% temam</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Berdewam</Button>
                </CardFooter>
              </Card>

              {/* Pricing Card */}
              <Card className="border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Popular</Badge>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>Ji bo hînbûna cidî</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">€9</span>
                    <span className="text-muted-foreground">/meh</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {['Hemû ders', 'TTS', 'Bê reklam', 'Offline'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Bibe Premium</Button>
                </CardFooter>
              </Card>

              {/* User Stats Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Statîstîkên Te</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🔥', value: '12', label: 'Streak' },
                    { icon: '⭐', value: '1,250', label: 'XP' },
                    { icon: '📚', value: '8', label: 'Ders' },
                    { icon: '🏆', value: '3', label: 'Badge' },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-3 rounded-lg bg-muted">
                      <div className="text-2xl mb-1">{s.icon}</div>
                      <div className="font-bold">{s.value}</div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Form Elements */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Form Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Têkeve</CardTitle>
                  <CardDescription>Bikeve hesabê xwe</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <Input type="email" placeholder="email@nimûne.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Şîfre</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Ziman</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Zimanekî hilbijêre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ku">Kurmancî</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Têkeve</Button>
                </CardFooter>
              </Card>

              {/* Dropdown Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Dropdowns</CardTitle>
                  <CardDescription>Menu examples</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        User Menu <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Hesabê Min</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" /> Profîl
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <BookOpen className="mr-2 h-4 w-4" /> Dersên Min
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" /> Mîheng
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <LogOut className="mr-2 h-4 w-4" /> Derkeve
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Module List */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Module List</h2>
            <div className="space-y-3">
              {[
                { name: 'A1.1 – Silav û Nasîn', units: 4, progress: 100, locked: false },
                { name: 'A1.2 – Malbat', units: 4, progress: 50, locked: false },
                { name: 'A1.3 – Xwarin û Vexwarin', units: 4, progress: 0, locked: false },
                { name: 'A2.1 – Rêwîtî', units: 5, progress: 0, locked: true },
              ].map((m, i) => (
                <Card key={i} className={m.locked ? 'opacity-50' : ''}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold
                      ${m.progress === 100 ? 'bg-green-500' : m.locked ? 'bg-muted-foreground' : 'bg-primary'}`}>
                      {m.progress === 100 ? <Check className="h-5 w-5" /> : m.locked ? <Lock className="h-4 w-4" /> : i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{m.name}</h4>
                      <p className="text-sm text-muted-foreground">{m.units} yekîne • {m.progress}% temam</p>
                      {m.progress > 0 && m.progress < 100 && (
                        <Progress value={m.progress} className="h-1.5 mt-2" />
                      )}
                    </div>
                    {!m.locked && (
                      <Button variant={m.progress === 100 ? 'outline' : 'default'} size="sm">
                        {m.progress === 100 ? 'Dubare' : m.progress > 0 ? 'Berdewam' : 'Destpêke'}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* Quiz */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Quiz / Activity</h2>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center">"Silav" çi ye bi Îngilîzî?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['Goodbye', 'Hello', 'Thank you', 'Please'].map((opt, i) => (
                  <Button
                    key={i}
                    variant={i === 1 ? 'default' : 'outline'}
                    className={`w-full justify-start text-left h-auto py-3 ${i === 1 ? 'bg-green-500 hover:bg-green-600' : ''}`}
                  >
                    {opt}
                    {i === 1 && <Check className="ml-auto h-5 w-5" />}
                  </Button>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Rast e! Berdewam →
                </Button>
              </CardFooter>
            </Card>
          </section>

          <Separator />

          {/* Avatars & Badges */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Avatars & Badges</h2>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Azad Kobanî</p>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">MD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Mamoste Dilovan</p>
                  <Badge variant="secondary">Teacher</Badge>
                </div>
              </div>

              <div className="flex gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </section>

          <Separator />

          {/* Teacher Dashboard Preview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Teacher Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Xwendekar', value: '24', change: '+3 vê hefteyê' },
                { label: 'Ders Temamkirî', value: '156', change: '+28 vê hefteyê' },
                { label: 'Rêjeya Serkeftinê', value: '87%', change: '+2%' },
              ].map((s, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <p className="text-2xl font-bold">{s.value}</p>
                    <p className="text-xs text-green-500">{s.change}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Xwendekarên Min</CardTitle>
                <Button size="sm">+ Zêde Bike</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Leyla Azad', level: 'A1', progress: 75, active: 'Îro' },
                    { name: 'Kawa Amed', level: 'A1', progress: 45, active: 'Duh' },
                    { name: 'Zozan Dîlok', level: 'A2', progress: 90, active: 'Îro' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{s.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">{s.name}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">{s.level}</Badge>
                          <Progress value={s.progress} className="h-1.5 flex-1" />
                          <span className="text-xs text-muted-foreground">{s.progress}%</span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{s.active}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
