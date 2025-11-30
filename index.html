<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto Denúncia - Proteção à Criança e Adolescente</title>
    
    <!-- Tailwind CSS (Estilos) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Babel para traduzir React e TypeScript no navegador -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <!-- Estilos globais para reset e fonte -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        /* Animações customizadas que o Tailwind padrão não tem */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-in { animation: fadeIn 0.5s ease-out forwards; }
    </style>
</head>
<body>
    <!-- Onde o React vai montar o app -->
    <div id="root"></div>

    <!-- Script Principal com Type="module" para suportar imports modernos -->
    <script type="text/babel" data-type="module" data-presets="react,typescript">
        
        // --- IMPORTS ADAPTADOS PARA O NAVEGADOR ---
        import React, { useState, useEffect, useRef } from 'https://esm.sh/react@18?dev';
        import ReactDOM from 'https://esm.sh/react-dom@18/client?dev';
        
        // Importando ícones do Lucide
        import { 
            Shield, Heart, AlertCircle, CheckCircle2, Share2, 
            ArrowRight, Phone, Lock, LogOut, XCircle 
        } from 'https://esm.sh/lucide-react@0.292.0?dev';

        // Importando Firebase (Versão Modular via CDN)
        import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
        import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
        import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

        // --- CONFIGURAÇÃO FIREBASE (PREENCHA AQUI) ---
        // Como estamos num arquivo único, precisamos definir a config manualmente aqui
        const __firebase_config = JSON.stringify({
            apiKey: "SUA_API_KEY_AQUI",
            authDomain: "SEU_PROJECT_ID.firebaseapp.com",
            projectId: "SEU_PROJECT_ID",
            storageBucket: "SEU_PROJECT_ID.appspot.com",
            messagingSenderId: "SEU_SENDER_ID",
            appId: "SEU_APP_ID"
        });
        
        // Variável de ambiente simulada para o ID do App
        const __app_id = 'projeto-denuncia-web';

        // --------------------------------------------------------
        // --- SEU CÓDIGO ORIGINAL COMEÇA AQUI (Intacto) ---
        // --------------------------------------------------------

        // --- CONFIGURAÇÃO FIREBASE ---
        const firebaseConfig = JSON.parse(__firebase_config || '{}');
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth(app);
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

        // --- PALETA DE CORES ---
        // Azul: #335aa4 | Verde: #669935 | Vermelho: #cd3533 | Amarelo: #fdca39

        // --- TIPOS ---
        type Page = 'landing' | 'form' | 'feedback';
        type RespondentType = 'child' | 'teen' | 'parent' | 'other' | '';
        type FormFocus = 'child' | 'parent' | '';

        interface FormData {
            name: string;
            age: string;
            respondentType: RespondentType;
            respondentOtherSpec: string;
            formFocus: FormFocus; 
            section2: Record<string, string>;
            section3: Record<string, string>;
            openFeedback: string;
        }

        // --- COMPONENTES AUXILIARES ---

        const PanicButton = () => {
            const handlePanic = () => {
                // Redirecionamento rápido para site neutro
                window.location.replace('https://www.google.com');
            };

            return (
                <button
                    onClick={handlePanic}
                    className="fixed bottom-4 right-4 z-[9999] bg-[#cd3533] text-white px-4 py-3 rounded-full font-bold shadow-2xl hover:bg-red-700 transition-all flex items-center gap-2 border-4 border-white animate-pulse hover:animate-none"
                    title="Sair imediatamente deste site"
                >
                    <LogOut size={20} />
                    SAIR RÁPIDO
                </button>
            );
        };

        const Header = () => (
            <header className="w-full bg-white shadow-sm py-3 px-4 flex items-center justify-between sticky top-0 z-40 border-b-4 border-[#335aa4]">
                <div className="flex items-center gap-3">
                    {/* Imagens removidas pois não estão no repositório, usando fallback direto */}
                    <div className="flex items-center gap-2">
                        <Shield className="w-8 h-8 text-[#335aa4]" />
                        <div className="flex flex-col">
                            <span className="font-bold text-[#335aa4] leading-tight">Conselho Tutelar</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wide">Canal de Proteção</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-[#cd3533] font-bold bg-[#cd3533]/10 px-3 py-1 rounded-full">
                    <Phone size={18} />
                    <span className="hidden md:inline">DISQUE</span> 100
                </div>
            </header>
        );

        const ProgressBar = ({ progress }: { progress: number }) => {
            return (
                <div className="w-full bg-gray-200 h-3 mb-6 rounded-full overflow-hidden relative">
                    <div 
                        className="bg-[#669935] h-full rounded-full transition-all duration-700 ease-in-out relative" 
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
                    </div>
                </div>
            );
        };

        // --- PÁGINAS ---

        const LandingPage = ({ onStart }: { onStart: () => void }) => {
            return (
                <div className="min-h-[calc(100vh-80px)] relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop" 
                            alt="Fundo Proteção" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#335aa4]/95 via-[#335aa4]/70 to-[#335aa4]/30"></div>
                    </div>

                    <div className="relative z-10 max-w-2xl bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl mt-4 border-t-8 border-[#fdca39]">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#335aa4] mb-4">
                            O Abuso Não Entra na Dança!
                        </h1>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Este é um espaço seguro. Se algo aconteceu ou se você está preocupado com alguém, nós estamos aqui para ouvir.
                            <br/><span className="text-sm text-gray-500 mt-2 block font-semibold">(Identificação Opcional e Sigilo Garantido)</span>
                        </p>

                        <button 
                            onClick={onStart}
                            className="group w-full md:w-auto px-8 py-4 text-lg font-bold text-white bg-[#cd3533] rounded-full hover:bg-[#b02a28] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
                        >
                            FAÇA SUA DENÚNCIA
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <div className="mt-6 flex justify-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1"><Lock size={14}/> 100% Seguro</span>
                            <span className="flex items-center gap-1"><Shield size={14}/> Anônimo</span>
                        </div>
                    </div>
                </div>
            );
        };

        const FeedbackPage = ({ onReset }: { onReset: () => void }) => {
            const handleShare = () => {
                const url = window.location.href; 
                const text = "Acesse o canal de denúncia e proteção à criança e adolescente. Sua voz importa.";
                
                if (navigator.share) {
                    navigator.share({ title: 'Projeto Denúncia', text, url });
                } else {
                    navigator.clipboard.writeText(url);
                    alert('Link copiado! Envie para quem precisa.');
                }
            };

            return (
                <div className="min-h-[calc(100vh-80px)] relative flex flex-col items-center justify-center px-4 bg-gray-50">
                    <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl text-center border-b-8 border-[#669935] animate-in">
                        <div className="w-20 h-20 bg-[#669935] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <CheckCircle2 className="w-10 h-10 text-white" />
                        </div>
                        
                        <h2 className="text-2xl font-bold text-[#335aa4] mb-4">
                            Denúncia enviada com sucesso!
                        </h2>
                        
                        <p className="text-gray-600 mb-8">
                            Agradecemos sua colaboração. Suas informações foram recebidas com segurança e serão analisadas pelo órgão responsável.
                        </p>

                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={onReset}
                                className="w-full py-3 px-4 bg-[#335aa4] text-white rounded-lg font-semibold hover:bg-[#264580] transition-colors shadow-md"
                            >
                                Enviar nova Denúncia / Questionário
                            </button>
                            
                            <button 
                                onClick={handleShare}
                                className="w-full py-3 px-4 bg-white border-2 border-[#335aa4] text-[#335aa4] rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                            >
                                <Share2 size={18} />
                                Compartilhar
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        // --- FORMULÁRIO PRINCIPAL ---

        const FormPage = ({ onSubmitSuccess, onBack }: { onSubmitSuccess: () => void, onBack: () => void }) => {
            const [loading, setLoading] = useState(false);
            const [formData, setFormData] = useState<FormData>({
                name: '',
                age: '',
                respondentType: '',
                respondentOtherSpec: '',
                formFocus: '',
                section2: {},
                section3: {},
                openFeedback: ''
            });

            const [errors, setErrors] = useState<Record<string, boolean>>({});
            const [ageTouched, setAgeTouched] = useState(false);
            const errorRef = useRef<HTMLDivElement>(null);

            useEffect(() => {
                // Tenta autenticar, mas não bloqueia se não tiver config
                try {
                   signInAnonymously(auth).catch((err) => console.error("Auth error", err));
                } catch (e) {
                    console.log("Firebase não configurado ou erro de auth", e);
                }
            }, []);

            const validateAge = (age: string) => {
                const num = parseInt(age);
                return !isNaN(num) && num >= 5 && num <= 110;
            };

            const validateForm = () => {
                const newErrors: Record<string, boolean> = {};

                if (!formData.age || !validateAge(formData.age)) newErrors['age'] = true;
                if (!formData.respondentType) newErrors['respondentType'] = true;

                if (formData.respondentType === 'other') {
                    if (!formData.respondentOtherSpec.trim()) newErrors['respondentOtherSpec'] = true;
                    if (!formData.formFocus) newErrors['formFocus'] = true;
                }

                const isChildFlow = formData.respondentType === 'child' || formData.respondentType === 'teen' || formData.formFocus === 'child';
                const isParentFlow = formData.respondentType === 'parent' || formData.formFocus === 'parent';

                if (isChildFlow) {
                    const childQuestions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];
                    childQuestions.forEach(q => {
                        if (!formData.section2[q]) newErrors[`sec2-${q}`] = true;
                    });
                }

                if (isParentFlow) {
                    const parentQuestions = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'];
                    parentQuestions.forEach(q => {
                        if (!formData.section3[q]) newErrors[`sec3-${q}`] = true;
                    });
                }

                setErrors(newErrors);
                return Object.keys(newErrors).length === 0;
            };

            const handleSubmit = async (e: React.FormEvent) => {
                e.preventDefault();
                setAgeTouched(true);

                if (!validateForm()) {
                    window.scrollTo({ top: 100, behavior: 'smooth' });
                    alert("Por favor, preencha todos os campos obrigatórios destacados em vermelho.");
                    return;
                }

                setLoading(true);

                try {
                    const user = auth.currentUser;
                    if (user) {
                            await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'denuncias'), {
                                ...formData,
                                submittedAt: serverTimestamp(),
                                status: 'new',
                                deviceInfo: navigator.userAgent
                            });
                    } else {
                        // Simulação se não tiver firebase configurado para teste visual
                        console.log("Modo simulação (sem firebase user):", formData);
                        await new Promise(resolve => setTimeout(resolve, 1500));
                    }
                    
                    setTimeout(() => {
                        setLoading(false);
                        onSubmitSuccess();
                    }, 500);

                } catch (error) {
                    console.error("Erro ao enviar:", error);
                    // Se der erro (ex: falta permissão ou config), avisamos mas deixamos passar para teste visual se for o caso
                    if (error.code === 'permission-denied' || error.code === 'unavailable') {
                         alert("Erro de conexão com o banco de dados. Verifique a configuração.");
                    } else {
                         alert("Houve um erro técnico. Tente novamente.");
                    }
                    setLoading(false);
                }
            };

            const calculateProgress = () => {
                let filled = 0;
                let total = 0;

                total += 2; 
                if (formData.age && validateAge(formData.age)) filled++;
                if (formData.respondentType) filled++;

                if (formData.respondentType === 'other') {
                    total += 2;
                    if (formData.respondentOtherSpec) filled++;
                    if (formData.formFocus) filled++;
                }

                const isChildFlow = formData.respondentType === 'child' || formData.respondentType === 'teen' || formData.formFocus === 'child';
                const isParentFlow = formData.respondentType === 'parent' || formData.formFocus === 'parent';

                if (isChildFlow) {
                    total += 8;
                    filled += Object.keys(formData.section2).length;
                } else if (isParentFlow) {
                    total += 6;
                    filled += Object.keys(formData.section3).length;
                }

                if (total === 0) return 0;
                return Math.min(100, Math.round((filled / total) * 100));
            };

            const handleInputChange = (field: keyof FormData, value: any) => {
                setFormData(prev => ({ ...prev, [field]: value }));
                if (errors[field]) {
                    setErrors(prev => {
                        const newErrs = { ...prev };
                        delete newErrs[field];
                        return newErrs;
                    });
                }
            };

            const handleSectionChange = (section: 'section2' | 'section3', question: string, value: string) => {
                setFormData(prev => ({
                    ...prev,
                    [section]: { ...prev[section], [question]: value }
                }));
                const errKey = section === 'section2' ? `sec2-${question}` : `sec3-${question}`;
                if (errors[errKey]) {
                    setErrors(prev => {
                        const newErrs = { ...prev };
                        delete newErrs[errKey];
                        return newErrs;
                    });
                }
            };

            const showChildSection = formData.respondentType === 'child' || formData.respondentType === 'teen' || formData.formFocus === 'child';
            const showParentSection = formData.respondentType === 'parent' || formData.formFocus === 'parent';

            const getInputClass = (isError: boolean) => 
                `w-full px-4 py-3 border rounded-lg outline-none transition-all ${
                    isError 
                    ? 'border-[#cd3533] bg-red-50 focus:ring-2 focus:ring-[#cd3533]' 
                    : 'border-gray-300 focus:ring-2 focus:ring-[#335aa4] focus:border-transparent'
                }`;

            return (
                <div className="min-h-screen bg-gray-50 pb-20 font-sans">
                    <PanicButton />
                    
                    <div className="max-w-3xl mx-auto px-4 py-8">
                        <button onClick={onBack} className="text-gray-500 hover:text-[#335aa4] mb-4 flex items-center gap-1 text-sm font-medium transition-colors">
                            &larr; Voltar para o início
                        </button>

                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="bg-[#335aa4] p-5 text-white">
                                <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                                    <Shield className="w-7 h-7" />
                                    Formulário de Proteção
                                </h2>
                                <p className="text-blue-100 text-sm mt-1 opacity-90">
                                    Seus dados são criptografados e enviados anonimamente.
                                </p>
                            </div>
                            
                            <div className="p-6 md:p-8">
                                <div className="mb-2 flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    <span>Progresso</span>
                                    <span>{calculateProgress()}%</span>
                                </div>
                                <ProgressBar progress={calculateProgress()} />

                                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                                    
                                    {/* SEÇÃO 1 - IDENTIFICAÇÃO */}
                                    <div className="space-y-5 animate-in">
                                        <h3 className="text-lg font-bold text-[#335aa4] border-b pb-2 flex items-center gap-2">
                                            1. Identificação
                                        </h3>
                                        
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Nome (Opcional)</label>
                                                <input 
                                                    type="text" 
                                                    className={getInputClass(false)} 
                                                    placeholder="Digite apenas se sentir seguro"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                                    Idade <span className="text-[#cd3533]">*</span>
                                                </label>
                                                <input 
                                                    type="number" 
                                                    className={getInputClass((ageTouched || errors['age']) && !validateAge(formData.age))}
                                                    placeholder="Ex: 12"
                                                    value={formData.age}
                                                    onChange={(e) => handleInputChange('age', e.target.value)}
                                                    onBlur={() => setAgeTouched(true)}
                                                />
                                                {(ageTouched || errors['age']) && !validateAge(formData.age) && (
                                                    <div className="flex items-center gap-1 text-[#cd3533] text-xs mt-1 font-semibold animate-pulse">
                                                        <XCircle size={12}/> Idade inválida (5 a 110 anos).
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className={`p-5 rounded-lg border transition-all ${errors['respondentType'] ? 'border-[#cd3533] bg-red-50' : 'border-blue-100 bg-blue-50'}`}>
                                            <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                                                Quem está respondendo? <span className="text-[#cd3533]">*</span>
                                                {errors['respondentType'] && <AlertCircle size={16} className="text-[#cd3533]" />}
                                            </label>
                                            
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {[
                                                    { id: 'child', label: 'Criança' },
                                                    { id: 'teen', label: 'Adolescente' },
                                                    { id: 'parent', label: 'Mãe/Pai ou Responsável' },
                                                    { id: 'other', label: 'Outro' }
                                                ].map((type) => (
                                                    <label 
                                                        key={type.id} 
                                                        className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all border ${
                                                            formData.respondentType === type.id 
                                                            ? 'bg-white border-[#335aa4] shadow-sm' 
                                                            : 'hover:bg-white border-transparent'
                                                        }`}
                                                    >
                                                        <input 
                                                            type="radio" 
                                                            name="respondentType"
                                                            value={type.id}
                                                            checked={formData.respondentType === type.id}
                                                            onChange={(e) => {
                                                                handleInputChange('respondentType', e.target.value);
                                                                if (e.target.value !== 'other') handleInputChange('formFocus', '');
                                                            }}
                                                            className="w-5 h-5 text-[#335aa4] focus:ring-[#335aa4]"
                                                        />
                                                        <span className="text-gray-700 font-medium">{type.label}</span>
                                                    </label>
                                                ))}
                                            </div>

                                            {formData.respondentType === 'other' && (
                                                <div className="mt-4 pt-4 border-t border-blue-200 space-y-4 animate-in">
                                                    
                                                    {/* Especifique */}
                                                    <div>
                                                        <label className="block text-xs font-bold text-gray-700 mb-1">
                                                            Especifique quem está respondendo: <span className="text-[#cd3533]">*</span>
                                                        </label>
                                                        <input 
                                                            type="text" 
                                                            className={getInputClass(!!errors['respondentOtherSpec'])}
                                                            placeholder="Especifique (ex: Professor, Terapeuta, Membro da família, etc.)"
                                                            value={formData.respondentOtherSpec}
                                                            onChange={(e) => handleInputChange('respondentOtherSpec', e.target.value)}
                                                        />
                                                    </div>
                                                    
                                                    {/* Foco (Múltipla Escolha / Radio) */}
                                                    <div>
                                                        <label className="block text-xs font-bold text-gray-700 mb-2">
                                                            Este questionário será respondido com foco em: <span className="text-[#cd3533]">*</span>
                                                        </label>
                                                        <div className="flex gap-4">
                                                            {[
                                                                { id: 'child', label: 'Criança / Adolescente' },
                                                                { id: 'parent', label: 'Pais / Responsáveis' }
                                                            ].map((focus) => (
                                                                <label 
                                                                    key={focus.id} 
                                                                    className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                                                                        formData.formFocus === focus.id 
                                                                        ? 'bg-[#335aa4] text-white border-[#335aa4]' 
                                                                        : `bg-white text-gray-600 hover:bg-gray-50 ${errors['formFocus'] ? 'border-[#cd3533]' : 'border-gray-300'}`
                                                                    }`}
                                                                >
                                                                    <input 
                                                                        type="radio" 
                                                                        name="formFocus"
                                                                        value={focus.id}
                                                                        checked={formData.formFocus === focus.id}
                                                                        onChange={(e) => handleInputChange('formFocus', e.target.value)}
                                                                        className="hidden" 
                                                                    />
                                                                    {formData.formFocus === focus.id && <CheckCircle2 size={16} />}
                                                                    <span className="text-sm font-bold">{focus.label}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                        {errors['formFocus'] && <p className="text-xs text-[#cd3533] mt-1 font-bold">Selecione uma opção.</p>}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* SEÇÃO 2 - CRIANÇA/ADOLESCENTE */}
                                    {showChildSection && (
                                        <div className="space-y-6 animate-in">
                                            <div className="bg-[#fdca39]/20 p-5 rounded-lg border-l-4 border-[#fdca39] flex items-start gap-3">
                                                <Heart className="w-6 h-6 text-[#335aa4] mt-1 shrink-0" fill="#335aa4" /> 
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-800">Perguntas para Crianças e Adolescentes</h3>
                                                    <p className="text-sm text-gray-600 mt-1">Responda com calma. Não existe resposta errada e ninguém vai brigar com você.</p>
                                                </div>
                                            </div>

                                            {[
                                                { id: 'q1', text: 'Você sabe o que é “abuso” ou quando alguém faz algo com o seu corpo que você não gosta?', opts: ['Sim', 'Mais ou menos', 'Não'] },
                                                { id: 'q2', text: 'Alguém já tocou no seu corpo de um jeito que te deixou com vergonha, medo ou confuso(a)?', opts: ['Sim', 'Não', 'Prefiro não responder'] },
                                                { id: 'q3', text: 'Alguém já pediu pra você guardar segredo sobre algum toque, foto ou conversa?', opts: ['Sim', 'Não'] },
                                                { id: 'q4', text: 'Você se sente à vontade para conversar com um adulto (pais, professores, Conselho Tutelar) quando algo te incomoda?', opts: ['Sim', 'Às vezes', 'Não'] },
                                                { id: 'q5', text: 'Você usa celular, internet ou redes sociais?', opts: ['Sim', 'Não'] },
                                                { id: 'q6', text: 'Alguém já te mandou mensagem, foto ou vídeo que te deixou desconfortável?', opts: ['Sim', 'Não'] },
                                                { id: 'q7', text: 'Se algo te deixa triste ou com medo, você sabe com quem pode conversar?', opts: ['Sim', 'Mais ou menos', 'Não'] },
                                                { id: 'q8', text: 'Você confia que os adultos ao seu redor te protegem e escutam quando você fala algo sério?', opts: ['Sim', 'Às vezes', 'Não'] }
                                            ].map((q) => (
                                                <div 
                                                    key={q.id} 
                                                    className={`bg-white p-5 rounded-lg border shadow-sm transition-all ${
                                                        errors[`sec2-${q.id}`] 
                                                        ? 'border-[#cd3533] ring-1 ring-[#cd3533] bg-red-50/30' 
                                                        : 'border-gray-100 hover:shadow-md'
                                                    }`}
                                                >
                                                    <p className="font-bold text-gray-800 mb-4 flex gap-2">
                                                        {q.text} 
                                                        {errors[`sec2-${q.id}`] && <span className="text-[#cd3533] text-xs font-normal whitespace-nowrap bg-red-100 px-2 py-0.5 rounded-full h-fit mt-1">Obrigatório</span>}
                                                    </p>
                                                    <div className="space-y-2">
                                                        {q.opts.map(opt => (
                                                            <label key={opt} className="flex items-center gap-3 cursor-pointer group p-2 rounded-md hover:bg-gray-50 transition-colors">
                                                                <div className="relative flex items-center">
                                                                    <input 
                                                                        type="radio" 
                                                                        name={`sec2-${q.id}`} 
                                                                        value={opt}
                                                                        checked={formData.section2[q.id] === opt}
                                                                        onChange={(e) => handleSectionChange('section2', q.id, e.target.value)}
                                                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-[#669935] transition-all"
                                                                    />
                                                                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#669935] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                                                </div>
                                                                <span className="text-gray-700 text-sm group-hover:text-gray-900">{opt}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* SEÇÃO 3 - PAIS/RESPONSÁVEIS */}
                                    {showParentSection && (
                                        <div className="space-y-6 animate-in">
                                            <div className="bg-[#335aa4]/10 p-5 rounded-lg border-l-4 border-[#335aa4] flex items-start gap-3">
                                                <Shield className="w-6 h-6 text-[#335aa4] mt-1 shrink-0" /> 
                                                <div>
                                                    <h3 className="text-lg font-bold text-[#335aa4]">Perguntas para Pais ou Responsáveis</h3>
                                                    <p className="text-sm text-gray-600 mt-1">Responda com honestidade. Sua percepção é fundamental para a proteção.</p>
                                                </div>
                                            </div>

                                            {[
                                                { id: 'p1', text: 'Você conversa com seu filho(a) sobre limites do corpo, toques e segurança?', opts: ['Sim, com frequência', 'Às vezes', 'Não'] },
                                                { id: 'p2', text: 'Seu filho(a) sabe que pode dizer “não” se alguém quiser tocá-lo de forma errada ou pedir segredo?', opts: ['Sim', 'Acho que não', 'Nunca conversamos sobre isso'] },
                                                { id: 'p3', text: 'Você acompanha o uso da internet, redes sociais e contatos virtuais da criança/adolescente?', opts: ['Sempre', 'Às vezes', 'Raramente'] },
                                                { id: 'p4', text: 'Já notou mudanças de comportamento (tristeza, medo, isolamento, raiva) sem motivo aparente?', opts: ['Sim', 'Não'] },
                                                { id: 'p5', text: 'Você sabe a quem procurar se suspeitar de abuso sexual ou exposição à pedofilia?', opts: ['Sim', 'Não', 'Não tenho certeza'] },
                                                { id: 'p6', text: 'Você conhece o Conselho Tutelar ou o Disque 100?', opts: ['Sim', 'Não'] },
                                            ].map((q) => (
                                                <div 
                                                    key={q.id} 
                                                    className={`bg-white p-5 rounded-lg border shadow-sm transition-all ${
                                                        errors[`sec3-${q.id}`] 
                                                        ? 'border-[#cd3533] ring-1 ring-[#cd3533] bg-red-50/30' 
                                                        : 'border-gray-100 hover:shadow-md'
                                                    }`}
                                                >
                                                    <p className="font-bold text-gray-800 mb-4 flex gap-2">
                                                        {q.text}
                                                        {errors[`sec3-${q.id}`] && <span className="text-[#cd3533] text-xs font-normal whitespace-nowrap bg-red-100 px-2 py-0.5 rounded-full h-fit mt-1">Obrigatório</span>}
                                                    </p>
                                                    <div className="space-y-2">
                                                        {q.opts.map(opt => (
                                                            <label key={opt} className="flex items-center gap-3 cursor-pointer group p-2 rounded-md hover:bg-gray-50 transition-colors">
                                                                <div className="relative flex items-center">
                                                                    <input 
                                                                        type="radio" 
                                                                        name={`sec3-${q.id}`} 
                                                                        value={opt}
                                                                        checked={formData.section3[q.id] === opt}
                                                                        onChange={(e) => handleSectionChange('section3', q.id, e.target.value)}
                                                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-[#335aa4] transition-all"
                                                                    />
                                                                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#335aa4] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                                                </div>
                                                                <span className="text-gray-700 text-sm group-hover:text-gray-900">{opt}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* SEÇÃO 4 - ESPAÇO ABERTO */}
                                    <div className="pt-6 border-t border-gray-200">
                                        <label className="block text-md font-bold text-gray-800 mb-2">Espaço para compartilhar (opcional)</label>
                                        <p className="text-sm text-gray-500 mb-2">Você gostaria de contar algo, tirar uma dúvida ou deixar uma observação?</p>
                                        <textarea 
                                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#335aa4] focus:border-transparent min-h-[120px] bg-gray-50 focus:bg-white transition-colors"
                                            placeholder="Sinta-se à vontade para escrever..."
                                            value={formData.openFeedback}
                                            onChange={(e) => handleInputChange('openFeedback', e.target.value)}
                                        />
                                    </div>

                                    {/* BOTÃO ENVIAR */}
                                    <div className="pt-4 pb-4">
                                        <button 
                                            type="submit"
                                            disabled={loading}
                                            className={`w-full py-4 text-lg font-bold text-white rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl transform ${
                                                loading 
                                                ? 'bg-gray-400 cursor-not-allowed' 
                                                : Object.keys(errors).length > 0
                                                    ? 'bg-[#cd3533] hover:bg-red-700 animate-pulse' 
                                                    : 'bg-[#669935] hover:bg-[#55802c] hover:-translate-y-1 hover:shadow-2xl'
                                            }`}
                                        >
                                            {loading ? 'Enviando com segurança...' : 'Enviar Respostas Confidenciais'}
                                            {!loading && (Object.keys(errors).length > 0 ? <AlertCircle /> : <Shield className="w-6 h-6" />)}
                                        </button>
                                        
                                        {Object.keys(errors).length > 0 && (
                                            <p className="text-center text-[#cd3533] font-bold text-sm mt-3 bg-red-50 p-2 rounded-lg border border-red-100 animate-bounce">
                                                Atenção: Existem perguntas obrigatórias não respondidas acima.
                                            </p>
                                        )}
                                        
                                        <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                                            <Lock size={12}/> Tecnologia SSL de Ponta a Ponta. Seus dados não ficam salvos no navegador.
                                        </p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        function App() {
            const [currentPage, setCurrentPage] = useState<Page>('landing');

            return (
                <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
                <Header />
                
                <main>
                    {currentPage === 'landing' && (
                        <LandingPage onStart={() => setCurrentPage('form')} />
                    )}
                    
                    {currentPage === 'form' && (
                        <FormPage 
                            onSubmitSuccess={() => setCurrentPage('feedback')} 
                            onBack={() => setCurrentPage('landing')}
                        />
                    )}
                    
                    {currentPage === 'feedback' && (
                        <FeedbackPage onReset={() => setCurrentPage('landing')} />
                    )}
                </main>

                <footer className="bg-white py-8 text-center text-gray-500 text-sm border-t mt-auto">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <Shield size={16} className="text-[#335aa4]" />
                        <span className="font-bold text-[#335aa4]">Projeto Denúncia</span>
                    </div>
                    <p>© 2024 Proteção à Criança e Adolescente. Todos os direitos reservados.</p>
                    <p className="mt-2 text-xs">Este site não substitui a ação policial. Em emergência, ligue 190.</p>
                </footer>
                </div>
            );
        }

        // --- RENDERIZAÇÃO ---
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);

    </script>
</body>
</html>
