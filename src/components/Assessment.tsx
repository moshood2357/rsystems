import React, { useState, useEffect } from 'react';

interface Question {
  id: string;
  text: string;
  type: 'radio' | 'select' | 'number';
  options?: string[];
  tooltip?: string;
  required: boolean;
}

interface Section {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

interface AssessmentData {
  [sectionId: string]: {
    [questionId: string]: string | number;
  };
}

interface SectionScore {
  score: number;
  maxScore: number;
  percentage: number;
  level: 'Critical' | 'Poor' | 'Fair' | 'Good';
  recommendations: string[];
}

interface AssessmentResults {
  sections: { [key: string]: SectionScore };
  overallScore: number;
  overallLevel: string;
  completedAt: string;
}

const sections: Section[] = [
  {
    id: 'infrastructure',
    title: 'Infrastructure & Hardware',
    description: 'Evaluate your physical and virtual infrastructure components',
    questions: [
      {
        id: 'server_age',
        text: 'What is the average age of your servers?',
        type: 'radio',
        options: ['Less than 2 years', '2-4 years', '4-6 years', 'More than 6 years'],
        tooltip: 'Older servers may have security vulnerabilities and performance issues',
        required: true
      },
      {
        id: 'network_speed',
        text: 'What is your internet connection speed?',
        type: 'select',
        options: ['Less than 50 Mbps', '50-100 Mbps', '100-500 Mbps', '500+ Mbps'],
        tooltip: 'Network speed affects productivity and cloud service performance',
        required: true
      },
      {
        id: 'backup_systems',
        text: 'Do you have redundant backup systems?',
        type: 'radio',
        options: ['Yes, fully redundant', 'Partial redundancy', 'Single backup', 'No backup systems'],
        tooltip: 'Redundant systems prevent single points of failure',
        required: true
      },
      {
        id: 'virtualization',
        text: 'What percentage of your infrastructure is virtualized?',
        type: 'select',
        options: ['0-25%', '26-50%', '51-75%', '76-100%'],
        tooltip: 'Virtualization improves resource utilization and flexibility',
        required: true
      }
    ]
  },
  {
    id: 'software',
    title: 'Software & Applications',
    description: 'Assess your software licensing, updates, and application portfolio',
    questions: [
      {
        id: 'software_licensing',
        text: 'How do you manage software licensing?',
        type: 'radio',
        options: ['Centralized license management', 'Department-level tracking', 'Ad-hoc tracking', 'No formal tracking'],
        tooltip: 'Proper license management prevents compliance issues and overspending',
        required: true
      },
      {
        id: 'cloud_adoption',
        text: 'What is your cloud adoption level?',
        type: 'select',
        options: ['Fully cloud-based', 'Hybrid cloud', 'Limited cloud usage', 'On-premises only'],
        tooltip: 'Cloud adoption can improve scalability and reduce infrastructure costs',
        required: true
      },
      {
        id: 'legacy_systems',
        text: 'How many critical legacy systems do you maintain?',
        type: 'number',
        tooltip: 'Legacy systems may pose security risks and integration challenges',
        required: true
      },
      {
        id: 'update_frequency',
        text: 'How frequently do you update software?',
        type: 'radio',
        options: ['Monthly', 'Quarterly', 'Bi-annually', 'Annually or less'],
        tooltip: 'Regular updates are crucial for security and performance',
        required: true
      }
    ]
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description: 'Review your security posture and compliance measures',
    questions: [
      {
        id: 'security_training',
        text: 'How often do employees receive security training?',
        type: 'radio',
        options: ['Monthly', 'Quarterly', 'Annually', 'Never'],
        tooltip: 'Regular training helps prevent security incidents',
        required: true
      },
      {
        id: 'incident_response',
        text: 'Do you have a documented incident response plan?',
        type: 'radio',
        options: ['Yes, regularly tested', 'Yes, but not tested', 'In development', 'No plan exists'],
        tooltip: 'Incident response plans minimize damage during security events',
        required: true
      },
      {
        id: 'compliance_standards',
        text: 'Which compliance standards do you follow?',
        type: 'select',
        options: ['Multiple standards (SOX, HIPAA, etc.)', 'Single standard', 'Industry guidelines only', 'No formal compliance'],
        tooltip: 'Compliance standards help maintain security and legal requirements',
        required: true
      },
      {
        id: 'access_control',
        text: 'How do you manage user access controls?',
        type: 'radio',
        options: ['Role-based with MFA', 'Role-based access', 'Basic user accounts', 'Shared accounts'],
        tooltip: 'Proper access control prevents unauthorized system access',
        required: true
      }
    ]
  },
  {
    id: 'data',
    title: 'Data Management',
    description: 'Evaluate your data backup, recovery, and governance practices',
    questions: [
      {
        id: 'backup_frequency',
        text: 'How frequently do you backup critical data?',
        type: 'radio',
        options: ['Real-time/Continuous', 'Daily', 'Weekly', 'Monthly or less'],
        tooltip: 'Frequent backups minimize data loss in case of incidents',
        required: true
      },
      {
        id: 'backup_testing',
        text: 'How often do you test backup restoration?',
        type: 'radio',
        options: ['Monthly', 'Quarterly', 'Annually', 'Never tested'],
        tooltip: 'Regular testing ensures backups are actually recoverable',
        required: true
      },
      {
        id: 'data_classification',
        text: 'Do you have a data classification system?',
        type: 'radio',
        options: ['Comprehensive classification', 'Basic classification', 'Informal classification', 'No classification'],
        tooltip: 'Data classification helps apply appropriate security measures',
        required: true
      },
      {
        id: 'data_retention',
        text: 'Do you have documented data retention policies?',
        type: 'radio',
        options: ['Comprehensive policies', 'Basic policies', 'Informal guidelines', 'No policies'],
        tooltip: 'Retention policies ensure compliance and efficient storage management',
        required: true
      }
    ]
  },
  {
    id: 'continuity',
    title: 'Business Continuity',
    description: 'Assess your disaster recovery and business continuity planning',
    questions: [
      {
        id: 'disaster_recovery',
        text: 'Do you have a tested disaster recovery plan?',
        type: 'radio',
        options: ['Comprehensive and tested', 'Plan exists, not tested', 'Basic plan only', 'No formal plan'],
        tooltip: 'Disaster recovery plans ensure business operations can continue after incidents',
        required: true
      },
      {
        id: 'rto_target',
        text: 'What is your Recovery Time Objective (RTO)?',
        type: 'select',
        options: ['Less than 1 hour', '1-4 hours', '4-24 hours', 'More than 24 hours'],
        tooltip: 'RTO defines how quickly systems must be restored after an incident',
        required: true
      },
      {
        id: 'remote_capabilities',
        text: 'What percentage of staff can work remotely?',
        type: 'select',
        options: ['76-100%', '51-75%', '26-50%', '0-25%'],
        tooltip: 'Remote work capabilities ensure business continuity during disruptions',
        required: true
      },
      {
        id: 'continuity_testing',
        text: 'How often do you test business continuity plans?',
        type: 'radio',
        options: ['Quarterly', 'Bi-annually', 'Annually', 'Never tested'],
        tooltip: 'Regular testing identifies gaps in continuity planning',
        required: true
      }
    ]
  },
  {
    id: 'support',
    title: 'IT Support & Operations',
    description: 'Review your IT support structure and operational processes',
    questions: [
      {
        id: 'support_model',
        text: 'What IT support model do you use?',
        type: 'radio',
        options: ['24/7 dedicated team', 'Business hours support', 'Part-time support', 'Ad-hoc support'],
        tooltip: 'Proper support models ensure timely resolution of IT issues',
        required: true
      },
      {
        id: 'response_time',
        text: 'What is your average incident response time?',
        type: 'select',
        options: ['Less than 1 hour', '1-4 hours', '4-24 hours', 'More than 24 hours'],
        tooltip: 'Fast response times minimize business impact of IT issues',
        required: true
      },
      {
        id: 'monitoring_tools',
        text: 'Do you use automated monitoring tools?',
        type: 'radio',
        options: ['Comprehensive monitoring', 'Basic monitoring', 'Limited monitoring', 'No automated monitoring'],
        tooltip: 'Monitoring tools help identify and prevent issues proactively',
        required: true
      },
      {
        id: 'documentation',
        text: 'How comprehensive is your IT documentation?',
        type: 'radio',
        options: ['Comprehensive and current', 'Good but outdated', 'Basic documentation', 'Minimal documentation'],
        tooltip: 'Good documentation improves troubleshooting and knowledge transfer',
        required: true
      }
    ]
  }
];

const ITAssessment: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<AssessmentResults | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  // Auto-save functionality
  useEffect(() => {
    const savedData = localStorage.getItem('itAssessmentData');
    if (savedData) {
      try {
        setAssessmentData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  useEffect(() => {
    const saveTimer = setInterval(() => {
      localStorage.setItem('itAssessmentData', JSON.stringify(assessmentData));
    }, 1000);

    return () => clearInterval(saveTimer);
  }, [assessmentData]);

  // Calculate progress
  const calculateProgress = () => {
    const totalQuestions = sections.reduce((sum, section) => sum + section.questions.length, 0);
    const answeredQuestions = Object.values(assessmentData).reduce(
      (sum, sectionData) => sum + Object.keys(sectionData).length,
      0
    );
    return (answeredQuestions / totalQuestions) * 100;
  };

  // Handle input changes
  const handleInputChange = (sectionId: string, questionId: string, value: string | number) => {
    setAssessmentData(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [questionId]: value
      }
    }));

    // Clear error for this field
    const errorKey = `${sectionId}.${questionId}`;
    if (errors[errorKey]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[errorKey];
        return newErrors;
      });
    }
  };

  // Validate current section
  const validateSection = (sectionIndex: number) => {
    const section = sections[sectionIndex];
    const sectionData = assessmentData[section.id] || {};
    const newErrors: { [key: string]: string } = {};

    section.questions.forEach(question => {
      if (question.required && !sectionData[question.id]) {
        newErrors[`${section.id}.${question.id}`] = 'This field is required';
      }
    });

    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  // Navigation functions
  const nextSection = () => {
    if (validateSection(currentSection)) {
      if (currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      } else {
        generateResults();
      }
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Calculate section completion
  const getSectionCompletion = (sectionIndex: number) => {
    const section = sections[sectionIndex];
    const sectionData = assessmentData[section.id] || {};
    const answeredQuestions = Object.keys(sectionData).length;
    return (answeredQuestions / section.questions.length) * 100;
  };

  // Generate assessment results
  const generateResults = () => {
    const sectionResults: { [key: string]: SectionScore } = {};
    let totalScore = 0;
    let totalMaxScore = 0;

    sections.forEach(section => {
      const sectionData = assessmentData[section.id] || {};
      let sectionScore = 0;
      const maxScore = section.questions.length * 4;

      section.questions.forEach(question => {
        const answer = sectionData[question.id];
        if (answer !== undefined) {
          if (question.type === 'radio' || question.type === 'select') {
            const optionIndex = question.options?.indexOf(answer as string) || 0;
            sectionScore += (question.options?.length || 1) - optionIndex;
          } else if (question.type === 'number') {
            const numValue = Number(answer);
            sectionScore += Math.min(numValue / 2, 4);
          }
        }
      });

      const percentage = (sectionScore / maxScore) * 100;
      let level: 'Critical' | 'Poor' | 'Fair' | 'Good';
      let recommendations: string[] = [];

      if (percentage >= 80) {
        level = 'Good';
        recommendations = ['Continue current practices', 'Consider advanced optimizations'];
      } else if (percentage >= 60) {
        level = 'Fair';
        recommendations = ['Implement improvements in key areas', 'Regular monitoring recommended'];
      } else if (percentage >= 40) {
        level = 'Poor';
        recommendations = ['Immediate attention required', 'Develop improvement plan'];
      } else {
        level = 'Critical';
        recommendations = ['Urgent action needed', 'Consider professional consultation'];
      }

      sectionResults[section.id] = {
        score: sectionScore,
        maxScore,
        percentage,
        level,
        recommendations
      };

      totalScore += sectionScore;
      totalMaxScore += maxScore;
    });

    const overallPercentage = (totalScore / totalMaxScore) * 100;
    let overallLevel = 'Critical';
    if (overallPercentage >= 80) overallLevel = 'Excellent';
    else if (overallPercentage >= 60) overallLevel = 'Good';
    else if (overallPercentage >= 40) overallLevel = 'Fair';

    const assessmentResults: AssessmentResults = {
      sections: sectionResults,
      overallScore: overallPercentage,
      overallLevel,
      completedAt: new Date().toISOString()
    };

    setResults(assessmentResults);
    setShowResults(true);
  };

  // Download results
  const downloadResults = () => {
    if (!results) return;

    const dataStr = JSON.stringify(results, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `IT_Assessment_Results_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Reset assessment
  const resetAssessment = () => {
    setAssessmentData({});
    setCurrentSection(0);
    setShowResults(false);
    setResults(null);
    setErrors({});
    localStorage.removeItem('itAssessmentData');
  };

  // Get level color
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Good': return 'bg-green-100 text-green-800';
      case 'Fair': return 'bg-yellow-100 text-yellow-800';
      case 'Poor': return 'bg-orange-100 text-orange-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Get progress color
  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    if (percentage >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  if (showResults && results) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">IT Assessment Results</h1>
            <p className="text-lg text-gray-600">
              Completed on {new Date(results.completedAt).toLocaleDateString()}
            </p>
          </div>

          {/* Overall Score */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Overall IT Maturity Score</h2>
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    stroke={results.overallScore >= 80 ? '#10b981' : results.overallScore >= 60 ? '#f59e0b' : results.overallScore >= 40 ? '#f97316' : '#ef4444'}
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${(results.overallScore / 100) * 339.292} 339.292`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{Math.round(results.overallScore)}%</span>
                </div>
              </div>
            </div>
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-lg font-medium ${getLevelColor(results.overallLevel)}`}>
              {results.overallLevel}
            </div>
          </div>

          {/* Section Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sections.map((section) => {
              const sectionResult = results.sections[section.id];
              
              return (
                <div key={section.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Score</span>
                      <span className="text-sm font-medium text-gray-900">
                        {Math.round(sectionResult.percentage)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ease-out ${getProgressColor(sectionResult.percentage)}`}
                        style={{ width: `${Math.min(sectionResult.percentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(sectionResult.level)}`}>
                      {sectionResult.level}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Recommendations:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {sectionResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={downloadResults}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Report
            </button>
            <button
              onClick={resetAssessment}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Take New Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentSectionData = sections[currentSection];
  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">IT Infrastructure Assessment</h1>
          <p className="text-lg text-gray-600 mb-6">
            Evaluate your organization's technology infrastructure and practices
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Estimated time: 15-20 minutes • Auto-saved every second
          </p>
        </div>

        {/* Section Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {sections.map((section, index) => {
              const completion = getSectionCompletion(index);
              const isCompleted = completion === 100;
              const isCurrent = index === currentSection;
              
              return (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(index)}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isCurrent
                      ? 'bg-indigo-600 text-white'
                      : isCompleted
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  {isCompleted && (
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className="hidden sm:inline">{section.title}</span>
                  <span className="sm:hidden">{index + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">{currentSectionData.title}</h2>
            <p className="text-gray-600 mt-1">{currentSectionData.description}</p>
          </div>

          <div className="space-y-8">
            {currentSectionData.questions.map((question) => {
              const sectionData = assessmentData[currentSectionData.id] || {};
              const value = sectionData[question.id] || '';
              const errorKey = `${currentSectionData.id}.${question.id}`;
              const hasError = !!errors[errorKey];

              return (
                <div key={question.id} className="space-y-3">
                  <div className="flex items-start">
                    <label className="block text-sm font-medium text-gray-900 flex-1">
                      {question.text}
                      {question.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {question.tooltip && (
                      <div className="relative ml-2">
                        <button
                          type="button"
                          onMouseEnter={() => setShowTooltip(question.id)}
                          onMouseLeave={() => setShowTooltip(null)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {showTooltip === question.id && (
                          <div className="absolute z-10 w-64 p-2 mt-1 text-sm text-white bg-gray-900 rounded-lg shadow-lg -top-2 left-6">
                            {question.tooltip}
                            <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -left-1 top-3"></div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {question.type === 'radio' && (
                    <div className="space-y-2">
                      {question.options?.map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name={question.id}
                            value={option}
                            checked={value === option}
                            onChange={(e) => handleInputChange(currentSectionData.id, question.id, e.target.value)}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          />
                          <span className="ml-3 text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {question.type === 'select' && (
                    <select
                      value={value}
                      onChange={(e) => handleInputChange(currentSectionData.id, question.id, e.target.value)}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        hasError ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                    >
                      <option value="">Select an option...</option>
                      {question.options?.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  )}

                  {question.type === 'number' && (
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => handleInputChange(currentSectionData.id, question.id, parseInt(e.target.value) || 0)}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        hasError ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      min="0"
                    />
                  )}

                  {hasError && (
                    <p className="text-sm text-red-600">{errors[errorKey]}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevSection}
            disabled={currentSection === 0}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Section {currentSection + 1} of {sections.length}
            </span>
            <button
              onClick={nextSection}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              {currentSection === sections.length - 1 ? (
                <>
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  View Results
                </>
              ) : (
                <>
                  Next
                  <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITAssessment;