"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ExternalLink,
  Code,
  Server,
  Database,
  Layout,
  Smartphone,
  Cpu,
  Send,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary-foreground">
                AC
              </span>
            </div>
            <span className="text-xl font-bold">Anas Shaikh</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex gap-2 transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
            <Button size="sm" className="hidden sm:flex gap-2 group">
              Contact Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
            <nav className="container flex flex-col py-4">
              <Link
                href="#about"
                className="py-2 text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="py-2 text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="py-2 text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="py-2 text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="py-2 text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
                <Button size="sm" className="flex-1 gap-2">
                  Contact Me
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="relative w-full py-20 md:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    Full Stack Developer
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Anas Shaikh</span>
                  </h1>
                  <h2 className="mt-2 text-xl font-medium text-muted-foreground sm:text-2xl">
                    Building digital experiences that matter
                  </h2>
                  <p className="mt-4 max-w-[600px] text-muted-foreground md:text-lg">
                    I craft clean, user-friendly applications with modern technologies. Passionate about solving complex
                    problems with elegant solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button className="gap-2 group h-11 px-6 transition-all">
                    <Mail className="h-4 w-4" />
                    Get in Touch
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" className="gap-2 h-11 px-6 transition-all hover:bg-primary/10">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
                <div className="flex gap-4 mt-4">
                  <SocialButton icon={<Github className="h-5 w-5" />} href="https://github.com" label="GitHub" />
                  <SocialButton icon={<Linkedin className="h-5 w-5" />} href="https://linkedin.com" label="LinkedIn" />
                  <SocialButton icon={<Twitter className="h-5 w-5" />} href="https://twitter.com" label="Twitter" />
                  <SocialButton icon={<Mail className="h-5 w-5" />} href="mailto:alex@example.com" label="Email" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-blue-500 blur-3xl opacity-20"></div>
                  <div className="relative h-full w-full rounded-full border-2 border-primary/20 p-2">
                    <div className="h-full w-full overflow-hidden rounded-full bg-background">
                      <Image
                        src="/placeholder.svg?height=450&width=450"
                        alt="Anas Shaikh"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                My Expertise
              </Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Technical Skills</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  A comprehensive toolkit that enables me to build complete, scalable applications
                </p>
              </div>
            </div>

            <Tabs defaultValue="frontend" className="mt-12 max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-5 h-12 p-1 bg-muted/80 rounded-full">
                <TabsTrigger value="frontend" className="rounded-full data-[state=active]:bg-background">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="backend" className="rounded-full data-[state=active]:bg-background">
                  Backend
                </TabsTrigger>
                <TabsTrigger value="database" className="rounded-full data-[state=active]:bg-background">
                  Database
                </TabsTrigger>
                <TabsTrigger value="design" className="rounded-full data-[state=active]:bg-background">
                  Design
                </TabsTrigger>
                <TabsTrigger value="tools" className="rounded-full data-[state=active]:bg-background">
                  Tools
                </TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <SkillCard name="React" icon={<Code className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Next.js" icon={<Code className="h-8 w-8 text-primary" />} />
                  <SkillCard name="TypeScript" icon={<Code className="h-8 w-8 text-primary" />} />
                  <SkillCard name="JavaScript" icon={<Code className="h-8 w-8 text-primary" />} />
                  <SkillCard name="HTML5" icon={<Layout className="h-8 w-8 text-primary" />} />
                  <SkillCard name="CSS3" icon={<Layout className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Tailwind CSS" icon={<Layout className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Redux" icon={<Code className="h-8 w-8 text-primary" />} />
                </div>
              </TabsContent>
              <TabsContent value="backend" className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <SkillCard name="Node.js" icon={<Server className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Express" icon={<Server className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Python" icon={<Server className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Django" icon={<Server className="h-8 w-8 text-primary" />} />
                  <SkillCard name="GraphQL" icon={<Server className="h-8 w-8 text-primary" />} />
                  <SkillCard name="REST API" icon={<Server className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Java" icon={<Server className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Spring Boot" icon={<Server className="h-8 w-8 text-primary" />} />
                </div>
              </TabsContent>
              <TabsContent value="database" className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <SkillCard name="PostgreSQL" icon={<Database className="h-8 w-8 text-primary" />} />
                  <SkillCard name="MongoDB" icon={<Database className="h-8 w-8 text-primary" />} />
                  <SkillCard name="MySQL" icon={<Database className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Redis" icon={<Database className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Firebase" icon={<Database className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Supabase" icon={<Database className="h-8 w-8 text-primary" />} />
                </div>
              </TabsContent>
              <TabsContent value="design" className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <SkillCard name="Figma" icon={<Layout className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Adobe XD" icon={<Layout className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Responsive Design" icon={<Smartphone className="h-8 w-8 text-primary" />} />
                  <SkillCard name="UI/UX Principles" icon={<Layout className="h-8 w-8 text-primary" />} />
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <SkillCard name="Git" icon={<Cpu className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Docker" icon={<Cpu className="h-8 w-8 text-primary" />} />
                  <SkillCard name="AWS" icon={<Cpu className="h-8 w-8 text-primary" />} />
                  <SkillCard name="CI/CD" icon={<Cpu className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Jest" icon={<Cpu className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Webpack" icon={<Cpu className="h-8 w-8 text-primary" />} />
                  <SkillCard name="VS Code" icon={<Cpu className="h-8 w-8 text-primary" />} />
                  <SkillCard name="Jira" icon={<Cpu className="h-8 w-8 text-primary" />} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                My Work
              </Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Projects</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  A selection of my recent work and personal projects
                </p>
              </div>
            </div>

            <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-Commerce Platform"
                description="A full-stack e-commerce platform with product management, cart functionality, and payment processing."
                image="./placeholder.svg?height=300&width=500"
                tags={["React", "Node.js", "MongoDB", "Stripe"]}
                demoLink="https://example.com"
                codeLink="https://github.com"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management application with real-time updates and team workspaces."
                image="./placeholder.svg?height=300&width=500"
                tags={["Next.js", "TypeScript", "Firebase", "Tailwind CSS"]}
                demoLink="https://example.com"
                codeLink="https://github.com"
              />
              <ProjectCard
                title="AI Content Generator"
                description="An AI-powered application that generates content based on user prompts using OpenAI's GPT model."
                image="./placeholder.svg?height=300&width=500"
                tags={["React", "Python", "Flask", "OpenAI API"]}
                demoLink="https://example.com"
                codeLink="https://github.com"
              />
              <ProjectCard
                title="Real Estate Marketplace"
                description="A platform for listing and searching properties with advanced filtering and map integration."
                image="./placeholder.svg?height=300&width=500"
                tags={["React", "Express", "PostgreSQL", "Google Maps API"]}
                demoLink="https://example.com"
                codeLink="https://github.com"
              />
              <ProjectCard
                title="Health & Fitness Tracker"
                description="A mobile-responsive application for tracking workouts, nutrition, and health metrics."
                image="./placeholder.svg?height=300&width=500"
                tags={["React Native", "GraphQL", "MongoDB", "Chart.js"]}
                demoLink="https://example.com"
                codeLink="https://github.com"
              />
              <ProjectCard
                title="Social Media Dashboard"
                description="A dashboard for managing and analyzing social media accounts across multiple platforms."
                image="./placeholder.svg?height=300&width=500"
                tags={["Vue.js", "Express", "Redis", "D3.js"]}
                demoLink="https://example.com"
                codeLink="https://github.com"
              />
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" className="gap-2 group h-11 px-6 transition-all hover:bg-primary/10">
                <Github className="h-4 w-4" />
                View More on GitHub
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                My Journey
              </Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Work Experience</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  My professional journey as a software engineer
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <div className="space-y-12">
                <ExperienceItem
                  title="Senior Software Engineer"
                  company="TechCorp Inc."
                  period="2021 - Present"
                  description="Lead developer for the company's flagship product. Architected and implemented new features, mentored junior developers, and improved application performance by 40%."
                  technologies={["React", "TypeScript", "Node.js", "AWS"]}
                />
                <ExperienceItem
                  title="Software Engineer"
                  company="InnovateSoft"
                  period="2018 - 2021"
                  description="Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality software solutions on time and within budget."
                  technologies={["JavaScript", "Vue.js", "Python", "PostgreSQL"]}
                />
                <ExperienceItem
                  title="Frontend Developer"
                  company="WebSolutions Ltd."
                  period="2016 - 2018"
                  description="Created responsive and accessible user interfaces. Implemented design systems and component libraries that improved development efficiency."
                  technologies={["HTML", "CSS", "JavaScript", "React"]}
                />
                <ExperienceItem
                  title="Software Development Intern"
                  company="StartupHub"
                  period="2015 - 2016"
                  description="Assisted in the development of web applications. Gained hands-on experience with modern web technologies and agile development practices."
                  technologies={["HTML", "CSS", "JavaScript", "jQuery"]}
                />
              </div>
            </div>

            <div className="mt-20">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  Education
                </Badge>
                <h3 className="text-2xl font-bold tracking-tight">Academic Background</h3>
              </div>
              <div className="max-w-3xl mx-auto mt-8">
                <div className="space-y-8">
                  <EducationItem
                    degree="Master of Science in Computer Science"
                    institution="Stanford University"
                    period="2013 - 2015"
                    description="Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Neural Networks for Natural Language Processing'."
                  />
                  <EducationItem
                    degree="Bachelor of Science in Computer Engineering"
                    institution="University of California, Berkeley"
                    period="2009 - 2013"
                    description="Graduated with honors. Active member of the ACM student chapter and participated in multiple hackathons."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full py-20 md:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Let's Connect
              </Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Card className="bg-background/60 backdrop-blur-sm border-primary/10 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-blue-500/5"></div>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">alex.chen@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">linkedin.com/in/alexchen</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">github.com/alexchen</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Twitter className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Twitter</p>
                      <p className="text-sm text-muted-foreground">twitter.com/alexchen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur-sm border-primary/10">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-blue-500/5"></div>
                <CardHeader>
                  <CardTitle className="text-xl">Send Me a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="bg-background/50 border-primary/10 focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="bg-background/50 border-primary/10 focus-visible:ring-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject of your message"
                        className="bg-background/50 border-primary/10 focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        className="bg-background/50 border-primary/10 focus-visible:ring-primary"
                      />
                    </div>
                    <Button type="submit" className="w-full gap-2 group h-11">
                      <Send className="h-4 w-4" />
                      Send Message
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-primary/10 bg-background/80 backdrop-blur-md py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary-foreground">
                  AC
                </span>
              </div>
              <span className="text-lg font-semibold">Anas Shaikh</span>
              <Badge variant="outline" className="ml-2 border-primary/20 text-primary">
                Software Engineer
              </Badge>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Anas Shaikh. All rights reserved.
            </p>
            <div className="flex gap-4">
              <SocialButton icon={<Github className="h-5 w-5" />} href="https://github.com" label="GitHub" />
              <SocialButton icon={<Linkedin className="h-5 w-5" />} href="https://linkedin.com" label="LinkedIn" />
              <SocialButton icon={<Twitter className="h-5 w-5" />} href="https://twitter.com" label="Twitter" />
              <SocialButton icon={<Mail className="h-5 w-5" />} href="mailto:alex@example.com" label="Email" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for social media buttons
function SocialButton({ icon, href, label }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        {icon}
        <span className="sr-only">{label}</span>
      </Button>
    </Link>
  )
}

// Component for skill cards
function SkillCard({ name, icon }) {
  return (
    <div className="group flex flex-col items-center justify-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border border-primary/10 shadow-sm transition-all hover:shadow-md hover:border-primary/30 hover:bg-primary/5">
      <div className="mb-3 transition-transform group-hover:scale-110">{icon}</div>
      <h3 className="text-sm font-medium">{name}</h3>
    </div>
  )
}

// Component for project cards
function ProjectCard({ title, description, image, tags, demoLink, codeLink }) {
  return (
    <Card className="overflow-hidden group transition-all hover:shadow-lg hover:border-primary/30 bg-background/60 backdrop-blur-sm border-primary/10">
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <Image
          src={image || "./placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="gap-2 transition-all hover:bg-primary/10 border-primary/10"
        >
          <Link href={codeLink} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild className="gap-2 group">
          <Link href={demoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Component for experience items
function ExperienceItem({ title, company, period, description, technologies }) {
  return (
    <div className="relative pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-blue-500 before:content-['']">
      <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-gradient-to-br from-primary to-blue-500 shadow-md"></div>
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm text-muted-foreground bg-primary/10 text-primary px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-lg font-medium text-primary">{company}</p>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-primary/5 border-primary/20 text-primary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

// Component for education items
function EducationItem({ degree, institution, period, description }) {
  return (
    <div className="relative pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-blue-500 before:content-['']">
      <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-gradient-to-br from-primary to-blue-500 shadow-md"></div>
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-bold">{degree}</h3>
          <span className="text-sm text-muted-foreground bg-primary/10 text-primary px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-lg font-medium text-primary">{institution}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

