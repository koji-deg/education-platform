'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MessageCircle, X, Send, ChevronDown, Menu, Download, Phone, BookOpen, Brain, BarChart, Radio } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Message型を定義
// interface Message {
//   text: string;
//   sender: 'user' | 'ai';
// }

export function LandingPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  // const [messages, setMessages] = useState<Message[]>([]);

  const toggleChat = () => setChatOpen(!chatOpen);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    // メッセージが空の場合は処理を中断
    if (!message.trim()) return;

    // デモ版のためメッセージ処理部分をコメントアウト
    /*
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message.trim(), sender: 'user' }
    ]);
    setMessage('');

    // AI応答のシミュレーションを1秒後に追加
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'これはテストメッセージです', sender: 'ai' }
      ]);
    }, 1000);
    */
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-lg hover:text-teal-600">特徴</a>
                <a href="#problems" className="text-lg hover:text-teal-600">課題</a>
                <a href="#solutions" className="text-lg hover:text-teal-600">ソリューション</a>
                <a href="#demo" className="text-lg hover:text-teal-600">デモ</a>
                <a href="#reviews" className="text-lg hover:text-teal-600">お客様の声</a>
                <a href="#pricing" className="text-lg hover:text-teal-600">料金プラン</a>
                <a href="#faq" className="text-lg hover:text-teal-600">よくある質問</a>
              </nav>
            </SheetContent>
          </Sheet>
          <h1 className="text-2xl font-bold text-center flex-grow">自律学習支援プラットフォーム</h1>
          <Button variant="outline">お問い合わせ</Button>
        </div>
      </header>

      {/* 特徴セクション */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            あなたの学習をサポートする3つの特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* 特徴1 */}
            <Card className="flex flex-col p-6">
              <CardContent className="flex-grow">
                <div className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">AIによる最適マッチング</h3>
                <p className="text-gray-600">あなたの目標や学習スタイルに合わせて、最適な教育サービスを提案します</p>
              </CardContent>
              <Button className="mt-4 w-full">詳細を見る</Button>
            </Card>

            {/* 特徴2 */}
            <Card className="flex flex-col p-6">
              <CardContent className="flex-grow">
                <div className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">インタラクティブな振り返り</h3>
                <p className="text-gray-600">AIアバターとの対話を通じて、学習内容を効果的に定着させます</p>
              </CardContent>
              <Button className="mt-4 w-full">詳細を見る</Button>
            </Card>

            {/* 特徴3 */}
            <Card className="flex flex-col p-6">
              <CardContent className="flex-grow">
                <div className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">学習進捗の可視化</h3>
                <p className="text-gray-600">エンゲージメントスコアで、モチベーション維持をサポート</p>
              </CardContent>
              <Button className="mt-4 w-full">詳細を見る</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 社会人が抱える課題 */}
      <section id="problems" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            社会人が抱える課題
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">時間の制約</h3>
                <p className="text-gray-600">仕事と学習の両立が難しく、継続的な学習時間の確保が課題となっています。</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">モチベーション維持</h3>
                <p className="text-gray-600">長期的な目標達成に向けて、学習のモチベーションを維持することが困難です。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 我々が提案するソリューションのコンセプト */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            当社が提案するソリューション
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">AIによる学習最適化</h3>
                <p className="text-gray-600">個々のスケジュールに合わせた学習プランを提案し、効率的な学習をサポートします。</p>
                {/* <p className="mt-4 font-semibold text-teal-600">導入企業の93%が学習効率向上を実感</p>*/}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">インタラクティブな学習体験</h3>
                <p className="text-gray-600">AIアバターとの対話を通じて、楽しく継続的な学習環境を提供します。</p>
                {/*<p className="mt-4 font-semibold text-teal-600">学習時間が平均40%増加</p>*/}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 利用手順 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            簡単3ステップで始められます
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-teal-600">1</div>
              <h3 className="text-xl font-semibold mb-4">アカウント作成</h3>
              <p className="text-gray-600">簡単な情報入力で、すぐに始められます</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-teal-600">2</div>
              <h3 className="text-xl font-semibold mb-4">学習目標の設定</h3>
              <p className="text-gray-600">AIが最適な学習プランを提案します</p>
            </div>
            <div className="text-center">
              <div className="w-20  h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-teal-600">3</div>
              <h3 className="text-xl font-semibold  mb-4">学習開始</h3>
              <p className="text-gray-600">AIアバターと一緒に楽しく学習を進めましょう</p>
            </div>
          </div>
        </div>
      </section>

      {/* デモ */}
<section id="demo" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
      デモ
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-teal-600" />
            性格診断＋学習サービスレコメンド
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col items-center">
          <Image 
            src="/seikaku-demo.png?height=200&width=400&text=Thumbnail"
            alt="学習サービスレコメンド"
            width={400}
            height={200}
            className="rounded-lg object-cover mb-4"
          />
          <CardDescription className="text-center">
            性格診断結果をもとにAIがあなたに合った学習方法・サービスを提案します。興味や目標に合致するパーソナライズされた推奨を今後実装予定です。
          </CardDescription>
        </CardContent>
        <Button className="w-auto mx-auto mt-4 mb-4" asChild>
          <Link href="https://education-matching-io.vercel.app/">デモを見る</Link>
        </Button>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-6 h-6 mr-2 text-teal-600" />
            振り返り支援AI
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col items-center">
          <Image 
            src="/furikaeri-demo.png?height=200&width=400&text=Thumbnail"
            alt="振り返り支援AI"
            width={400}
            height={200}
            className="rounded-lg object-cover mb-4"
          />
          <CardDescription className="text-center">
            AIアバターとの対話を通じて、学習内容を効果的に復習し、理解を深めます。インタラクティブな振り返りを体験してください。
          </CardDescription>
        </CardContent>
        <Button className="w-auto mx-auto mt-4 mb-4" asChild>
          <Link href="https://aichat-application.vercel.app/">デモを見る</Link>
        </Button>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart className="w-6 h-6 mr-2 text-teal-600" />
            学習エンゲージメントサーベイ
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col items-center">
          <Image 
            src="/learning_engagement-demo.png?height=200&width=400&text=Thumbnail"
            alt="学習エンゲージメントサーベイ"
            width={400}
            height={200}
            className="rounded-lg object-cover mb-4"
          />
          <CardDescription className="text-center">
            あなたの学習エンゲージメントを定期的に測定・可視化します。データに基づいた学習改善のヒントを得られます。
          </CardDescription>
        </CardContent>
        <Button className="w-auto mx-auto mt-4 mb-4" asChild>
          <Link href="https://study-engagement-survey-nt79.vercel.app/">デモを見る</Link>
        </Button>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Radio className="w-6 h-6 mr-2 text-teal-600" />
            学習支援AIラジオ
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col items-center">
          <Image 
            src="/study_support_radio-demo.png?height=200&width=400&text=Thumbnail"
            alt="学習支援AIラジオ"
            width={400}
            height={200}
            className="rounded-lg object-cover mb-4"
          />
          <CardDescription className="text-center">
            AIがパーソナライズされた学習コンテンツをラジオ形式で提供します。移動中や作業中にも効率的に学習できます。
          </CardDescription>
        </CardContent>
        <Button className="w-auto mx-auto mt-4 mb-4" asChild>
          <Link href="https://learning-support-radio.vercel.app/">デモを見る</Link>
        </Button>
      </Card>
    </div>
  </div>
</section>


      {/* 料金プラン */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            料金プラン
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['無料プラン', 'スタンダード', 'プレミアム'].map((plan, index) => (
              <Card key={index} className={index === 1 ? 'border-teal-500 border-2' : ''}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                  <p className="text-4xl font-bold mb-6">¥{index * 500}<span className="text-base font-normal">/月</span></p>
                  <ul className="mb-6 space-y-2">
                    <li>機能 1</li>
                    <li>機能 2</li>
                    <li>機能 3</li>
                    {index > 0 && <li>追加機能 1</li>}
                    {index > 1 && <li>追加機能 2</li>}
                  </ul>
                  <Button className="w-full">選択する</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* よくあるご質問 */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            よくあるご質問
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>サービスの利用料金はいくらですか？</AccordionTrigger>
              <AccordionContent>
                基本プランは月額3,000円からご利用いただけます。詳細な料金プランについては、上記の料金プラン表をご確認ください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>どのような学習コンテンツが提供されていますか？</AccordionTrigger>
              <AccordionContent>
                ビジネススキル、語学、プログラミングなど、幅広い分野のコンテンツを提供しています。AIが個々のニーズに合わせて最適なコンテンツを推奨します。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>AIアバターとの対話は24時間利用可能ですか？</AccordionTrigger>
              <AccordionContent>
                はい、AIアバターは24時間365日利用可能です。いつでもあなたの学習をサポートします。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>


      {/* CTAセクション */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            あなたの学びを、もっと効果的に
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            AIアバターとの対話で、新しい学習体験を始めましょう
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-teal-600 text-white px-8 py-6 rounded-lg text-xl shadow-lg hover:bg-teal-700 transition-colors duration-300">
              無料で始める
            </Button>
            <Button variant="outline" className="px-8 py-6 rounded-lg text-xl">
              資料ダウンロード
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">会社情報</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-teal-400">会社概要</Link></li>
                <li><Link href="#" className="hover:text-teal-400">ミッション</Link></li>
                <li><Link href="#" className="hover:text-teal-400">チーム</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">サービス</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-teal-400">特徴</Link></li>
                <li><Link href="#" className="hover:text-teal-400">料金プラン</Link></li>
                <li><Link href="#" className="hover:text-teal-400">導入事例</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">サポート</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-teal-400">よくある質問</Link></li>
                <li><Link href="#" className="hover:text-teal-400">お問い合わせ</Link></li>
                <li><Link href="#" className="hover:text-teal-400">ヘルプセンター</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">法的情報</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-teal-400">利用規約</Link></li>
                <li><Link href="#" className="hover:text-teal-400">プライバシーポリシー</Link></li>
                <li><Link href="#" className="hover:text-teal-400">特定商取引法に基づく表記</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 自律学習支援プラットフォーム. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* フローティングチャットボタン */}
      <Button
        onClick={toggleChat}
        className="fixed right-6 bottom-6 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-700 transition-all duration-300 z-50 p-0"
      >
        {chatOpen ? (
          <ChevronDown className="w-8 h-8 text-white" />
        ) : (
          <MessageCircle className="w-8 h-8 text-white" />
        )}
      </Button>

      {/* チャットウィンドウ */}
      {chatOpen && (
        <Card className="fixed right-6 bottom-24 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col z-40">
          {/* チャットヘッダー */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <Image
                src="/placeholder.svg"
                alt="AI Avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 font-semibold">学習サポートAI</span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
            </Button>
          </div>

          {/* メッセージエリア（デモ版のためコメントアウト） */}
          {/*
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'user'
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          */}

          {/* 入力エリア */}
          <form onSubmit={sendMessage} className="p-4 border-t flex items-center">
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="メッセージを入力..."
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <Button type="submit" variant="ghost" size="icon" className="ml-2 p-2 text-teal-600 hover:text-teal-700">
              <Send className="w-6 h-6" />
            </Button>
          </form>
        </Card>
      )}

      {/* フローティングCTAボタン */}
      <div className="fixed left-6 bottom-6 flex flex-col space-y-4">
        <Button className="bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300">
          <Download className="w-6 h-6 mr-2" /> 資料ダウンロード
        </Button>
        <Button variant="outline" className="bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
          <Phone className="w-6 h-6 mr-2" /> お問い合わせ
        </Button>
      </div>
    </div>
  )
}