import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const BASE_PATH = import.meta.env.BASE_URL || '/'

const directions = [
  {
    id: 'warm',
    name: 'A. Warm & Welcoming',
    description: 'Forest green, cream, gold — Duolingo meets Headspace',
    colors: ['#2D5A3D', '#FDF8F3', '#D4A843'],
  },
  {
    id: 'modern',
    name: 'B. Modern & Clean',
    description: 'Deep blue, gray, teal — Linear meets Notion',
    colors: ['#1E3A5F', '#F5F7FA', '#0D9488'],
  },
  {
    id: 'heritage',
    name: 'C. Cultural Heritage',
    description: 'Earth brown, sand, gold, burgundy — Kurdish pride',
    colors: ['#5D4E37', '#F5EDE0', '#E6B800', '#722F37'],
  },
]

const variants = [
  { device: 'mobile', theme: 'light', label: 'Mobile Light' },
  { device: 'mobile', theme: 'dark', label: 'Mobile Dark' },
  { device: 'desktop', theme: 'light', label: 'Desktop Light' },
  { device: 'desktop', theme: 'dark', label: 'Desktop Dark' },
]

export function StitchShowcase() {
  const getUrl = (direction: string, device: string, theme: string) => {
    return `${BASE_PATH}stitch/${direction}/${device}/${theme}/`
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Stitch Brand Directions</h1>
          <p className="text-muted-foreground">
            Landing page designs generated with Google Stitch. Compare and pick a direction.
          </p>
        </div>

        <div className="space-y-6">
          {directions.map((dir) => (
            <Card key={dir.id}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {dir.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border border-border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div>
                    <CardTitle>{dir.name}</CardTitle>
                    <CardDescription>{dir.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {variants.map((v) => (
                    <a
                      key={`${v.device}-${v.theme}`}
                      href={getUrl(dir.id, v.device, v.theme)}
                      className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-md text-sm font-medium transition-colors"
                    >
                      {v.label}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h2 className="font-semibold mb-2">How to compare</h2>
          <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
            <li>Open each direction in new tabs</li>
            <li>Focus on the <strong>vibe</strong>, not pixel details</li>
            <li>Pick the direction that feels right for Kurdish learners</li>
            <li>We'll build the actual app in code with consistent components</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
