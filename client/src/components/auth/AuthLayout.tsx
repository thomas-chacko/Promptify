import React from 'react';
import { Zap, Sparkles, Brain, Palette } from 'lucide-react';

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    type: 'login' | 'signup';
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, type }) => {
    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding & Info */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-300 rounded-full blur-2xl"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
                    {/* Logo */}
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold">AI Prompts Hub</h1>
                    </div>

                    {/* Main Content */}
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-6 leading-tight">
                            {type === 'login' 
                                ? 'Welcome back to the future of creativity' 
                                : 'Join the AI creativity revolution'
                            }
                        </h2>
                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            {type === 'login'
                                ? 'Access thousands of trending AI prompts that generate stunning, viral-worthy images.'
                                : 'Discover, create, and share AI prompts that bring your wildest imaginations to life.'
                            }
                        </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4">
                                <Sparkles className="w-5 h-5 text-yellow-300" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Trending Prompts</h3>
                                <p className="text-white/70 text-sm">Latest viral AI prompts updated daily</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4">
                                <Brain className="w-5 h-5 text-blue-300" />
                            </div>
                            <div>
                                <h3 className="font-semibold">AI-Powered</h3>
                                <p className="text-white/70 text-sm">Smart recommendations for your style</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4">
                                <Palette className="w-5 h-5 text-pink-300" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Creative Community</h3>
                                <p className="text-white/70 text-sm">Connect with fellow AI artists</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    {/* <div className="mt-12 grid grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold">50K+</div>
                            <div className="text-white/70 text-sm">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">100K+</div>
                            <div className="text-white/70 text-sm">AI Prompts</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">1M+</div>
                            <div className="text-white/70 text-sm">Images Created</div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-4">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">AI Prompts Hub</h1>
                    </div>

                    {/* Form Header */}
                    <div className="text-center lg:text-left mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
                        <p className="text-gray-600">{subtitle}</p>
                    </div>
                    
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;