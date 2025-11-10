import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

export default function TestShadcnComponents() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shadcn UI + Tailwind v4 Test</h1>
      
      {/* Button Component Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Button Component</CardTitle>
          <CardDescription>Testing all button variants with Tailwind v4</CardDescription>
        </CardHeader>
        <CardContent className="space-x-2 space-y-2">
          <Button>Default Button</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🔥</Button>
        </CardContent>
      </Card>

      {/* Card Component Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Card Component</CardTitle>
          <CardDescription>Testing card styling</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is a test card with Tailwind v4 styling. The background and borders should properly use the CSS variables defined in globals.css.</p>
        </CardContent>
      </Card>

      {/* Tabs Component Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Tabs Component</CardTitle>
          <CardDescription>Testing tabs with Tailwind v4</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Badge Component Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Badge Component</CardTitle>
          <CardDescription>Testing badge variations</CardDescription>
        </CardHeader>
        <CardContent className="space-x-2 space-y-2">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </CardContent>
      </Card>

      {/* Avatar Component Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Avatar Component</CardTitle>
          <CardDescription>Testing avatar component</CardDescription>
        </CardHeader>
        <CardContent className="flex space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>

      {/* Accordion Component Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Accordion Component</CardTitle>
          <CardDescription>Testing accordion functionality</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled with Tailwind v4?</AccordionTrigger>
              <AccordionContent>
                Yes. It uses CSS variables and the @theme directive for styling.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Input Component Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Input Component</CardTitle>
          <CardDescription>Testing input styling</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Default input" />
          <Input placeholder="Input with value" defaultValue="Hello World" />
          <Input disabled placeholder="Disabled input" />
        </CardContent>
      </Card>
    </div>
  )
}