'use client'

import { useState } from 'react';
import { User, Book, FileText, Clock, CreditCard, IdCard } from "lucide-react";
import { FaCreditCard, FaPaypal, FaCalendar, FaApple, FaQrcode, FaMoneyCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const navigationItems = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'learning', name: 'My Learning', icon: Book },
    { id: 'assignments', name: 'Assignments', icon: FileText },
    { id: 'attendance', name: 'Attendance', icon: Clock },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'idcard', name: 'ID Card', icon: IdCard },
  ];

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <div className="w-72 bg-gray-800 h-screen border-r border-gray-700">
        <div className="p-6 flex items-center space-x-3">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image src="/favicon.ico" alt="Favicon" width={64} height={64} />
          </div>
          <h1 className="text-3xl font-bold text-white">Blixxar</h1>
        </div>
        <nav className="mt-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-4 hover:bg-gray-700/50 transition-colors ${
                activeTab === item.id 
                  ? 'bg-[#38b6ff]/10 text-[#38b6ff] border-r-4 border-[#38b6ff]' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <item.icon className={`h-5 w-5 mr-3 ${
                activeTab === item.id ? 'text-[#38b6ff]' : 'text-gray-400'
              }`} />
              {item.name}
            </button>
          ))}
        </nav>

        {/* Profile Section in Sidebar */}
        <div className="absolute bottom-0 w-72 p-6 border-t border-gray-700 bg-gray-800">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#38b6ff] to-[#6dd4ff] rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-white font-medium">Tony Stark</h3>
              <p className="text-sm text-gray-400">Engineering</p>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => setActiveTab('profile')}
              className="w-full bg-[#38b6ff] text-white py-2 rounded-md hover:bg-[#2d99cc] transition duration-200"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto bg-gray-900">
        {activeTab === 'profile' && <ProfileTab />}
        {activeTab === 'assignments' && <AssignmentsTab />}
        {activeTab === 'attendance' && <AttendanceTab />}
        {activeTab === 'billing' && <BillingTab setShowPaymentOptions={setShowPaymentOptions} showPaymentOptions={showPaymentOptions} />}
        {activeTab === 'idcard' && <IDCardTab />}
        {activeTab === 'learning' && <MyLearningTab />}
      </div>
    </div>
  );
}

function ProfileTab() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6">Profile Information 🌟</h2>
        <div className="space-y-4">
          <p className="text-gray-400">🦸‍♂️ <strong>Name:</strong> Tony Stark</p>
          <p className="text-gray-400">⚙️ <strong>Department:</strong> Engineering</p>
          <p className="text-gray-400">🏫 <strong>College:</strong> Massachusetts Institute of Technology</p>
          <p className="text-gray-400">📚 <strong>Academic Year:</strong> 2nd Year</p>
          <p className="text-gray-400">🩸 <strong>Blood Group:</strong> AB+</p>
          <p className="text-gray-400">🏡 <strong>Address:</strong> 10880 Malibu Point, Malibu, CA</p>
          <p className="text-gray-400">📞 <strong>Phone Number:</strong> (555) 123-4567</p>
          <p className="text-gray-400">👨‍🔧 <strong>Father&apos;s Name:</strong> Howard Stark</p>
          <p className="text-gray-400">👩‍🏫 <strong>Mother&apos;s Name:</strong> Maria Stark</p>
          <p className="text-gray-400">🛠️ <strong>Major:</strong> Mechanical Engineering</p>
          <p className="text-gray-400">🎂 <strong>Date of Birth:</strong> May 11, 2005</p>
          <p className="text-gray-400">✈️ <strong>Hobbies:</strong> Inventing, Designing, Coding, Business</p>
          <p className="text-gray-400">🏆 <strong>Achievements:</strong> Robotics Competition Winner, Marvel&apos;s Most Intelligent Character</p>
          <p className="text-gray-400">📊 <strong>Skills:</strong> Robotics, Programming, Business Management</p>
        </div>
      </div>
    </div>
  );
}

function MyLearningTab() {
  const courses = [
    { course: 'Web Development', progress: 75, icon: '🌐' },
    { course: 'Data Science', progress: 60, icon: '📊' },
    { course: 'Machine Learning', progress: 50, icon: '🧮' },
    { course: 'Artificial Intelligence', progress: 30, icon: '🧠' },
    { course: 'Blockchain Technology', progress: 80, icon: '⛓️' },
    { course: 'Robotics', progress: 90, icon: '🤖' },
    { course: 'Cybersecurity', progress: 70, icon: '🛡️' },
    { course: 'Graphic Design', progress: 65, icon: '🎨' },
    { course: 'Mobile App Development', progress: 85, icon: '📱' },
    { course: 'Cloud Computing', progress: 55, icon: '☁️' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">My Learning Progress</h2>
        <div className="space-y-4">
          {courses.map((item, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center transition-transform hover:scale-102">
              <div className="flex items-center">
                <span className="text-2xl mr-2">{item.icon}</span>
                <h3 className="text-lg font-semibold text-white">{item.course}</h3>
              </div>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
              <span className="text-white">{item.progress}%</span>
              <button
                className="ml-4 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                onClick={() => alert(`More details about ${item.course}`)}
              >
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AssignmentsTab() {
  const assignments = [
    { subject: 'Math Assignment', dueDate: '30th October 2024', icon: '➕' },
    { subject: 'Physics Lab Report', dueDate: '15th November 2024', icon: '⚛️' },
    { subject: 'Chemistry Project', dueDate: '1st December 2024', icon: '🧪' },
    { subject: 'Computer Science Assignment', dueDate: '20th November 2024', icon: '💻' },
    { subject: 'Engineering Design Project', dueDate: '5th December 2024', icon: '📐' },
    { subject: 'Biology Experiment', dueDate: '25th November 2024', icon: '🧬' },
    { subject: 'History Essay', dueDate: '10th December 2024', icon: '📜' },
    { subject: 'Geography Presentation', dueDate: '12th December 2024', icon: '🌍' },
  ];

  const practicals = [
    { subject: 'Physics Lab', dueDate: '1st November 2024', icon: '⚗️' },
    { subject: 'Chemistry Lab', dueDate: '20th November 2024', icon: '🔬' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">Assignments & Practicals</h2>
        <h3 className="text-xl font-semibold text-white mb-2">Assignments</h3>
        <div className="space-y-4">
          {assignments.map((assignment, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center transition-transform hover:scale-102">
              <div className="flex items-center">
                <span className="text-2xl mr-2">{assignment.icon}</span>
                <h3 className="text-lg font-semibold text-white">{assignment.subject}</h3>
              </div>
              <div className="flex-1 mx-4">
                <p className="text-gray-400">Due Date: {assignment.dueDate}</p>
              </div>
              <button className="bg-[#38b6ff] text-white px-4 py-2 rounded hover:bg-[#38a1ff] transition">
                Submit
              </button>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 mt-6">Practicals</h3>
        <div className="space-y-4">
          {practicals.map((practical, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center transition-transform hover:scale-102">
              <div className="flex items-center">
                <span className="text-2xl mr-2">{practical.icon}</span>
                <h3 className="text-lg font-semibold text-white">{practical.subject}</h3>
              </div>
              <div className="flex-1 mx-4">
                <p className="text-gray-400">Due Date: {practical.dueDate}</p>
              </div>
              <button className="bg-[#38b6ff] text-white px-4 py-2 rounded hover:bg-[#38a1ff] transition">
                Check
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface AbsenceLog {
  subject: string;
  date: string;
  period: string;
}

interface ODRequest {
  transactionNumber: number;
  reason: string;
  status: 'pending' | 'approved' | 'declined';
}

function AttendanceTab() {
  const overallAttendance = 92;

  const [absenceLog] = useState<AbsenceLog[]>([
    { subject: 'Math', date: 'October 20, 2024', period: '3rd Period' },
    { subject: 'Physics', date: 'October 18, 2024', period: '2nd Period' },
    { subject: 'Chemistry', date: 'October 15, 2024', period: '5th Period' },
    { subject: 'Chemistry', date: 'October 15, 2024', period: '1st Period' },
  ]);

  const [odRequests, setOdRequests] = useState<ODRequest[]>([]); 
  const [odReason, setOdReason] = useState(''); 

  const subjects = [
    { subject: 'Math', percentage: 90, attended: 9, total: 10 },
    { subject: 'Physics', percentage: 90, attended: 9, total: 10 },
    { subject: 'Chemistry', percentage: 80, attended: 8, total: 10 },
    { subject: 'Computer Science', percentage: 100, attended: 10, total: 10 },
    { subject: 'Engineering', percentage: 100, attended: 10, total: 10 },
  ];

  const handleRequestOD = () => {
    const newRequest: ODRequest = {
      transactionNumber: odRequests.length + 1, // Incremental transaction number
      reason: odReason,
      status: 'pending',
    };

    setOdRequests([...odRequests, newRequest]);
    setOdReason(''); // Clear input after submission
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6">Attendance </h2>

        {/* Bar chart-like display with hover details */}
        <div className="space-y-4">
          {subjects.map((entry, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium text-white">{entry.subject}</span>
                <span className="font-semibold text-gray-300">{entry.percentage}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-4 mt-2">
                <div
                  className="bg-green-500 h-4 rounded-full transition-transform transform hover:scale-100" 
                  style={{ width: `${entry.percentage}%` }}
                  data-tooltip-content={`${entry.attended}/${entry.total} classes attended`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Overall Attendance Section */}
        <div className="mt-8">
          <h3 className="text-lg text-white mb-2">Overall Attendance: 🗓️</h3>
          <div className="w-full bg-gray-600 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${overallAttendance}%` }}
            />
          </div>
          <p className="text-gray-400 mt-1 text-right">{overallAttendance}%</p>
        </div>

        {/* Absence Log */}
        <div className="mt-8 bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg text-white mb-4">Absence Log 📅</h3>
          <ul className="space-y-3">
            {absenceLog.map((log, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-600 p-3 rounded-lg">
                <div>
                  <p className="text-gray-300">{log.subject}</p>
                  <p className="text-gray-400 text-sm">{log.date} - {log.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Request OD Section */}
        <div className="mt-8 bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg text-white mb-4">Request OD ✍️</h3>
          <textarea
            className="w-full p-2 mb-4 bg-gray-600 text-white rounded-lg"
            placeholder="Enter reason for OD"
            value={odReason}
            onChange={(e) => setOdReason(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={handleRequestOD}
          >
            Request OD
          </button>

          {/* OD Request Status */}
          <div className="mt-6">
            {odRequests.length > 0 && (
              <>
                <h4 className="text-lg text-white mb-4">OD Requests</h4>
                <ul className="space-y-3">
                  {odRequests.map((odRequest) => (
                    <li
                      key={odRequest.transactionNumber}
                      className="flex justify-between items-center bg-gray-600 p-3 rounded-lg"
                    >
                      <div>
                        <p className="text-gray-300">
                          OD Transaction #{odRequest.transactionNumber}: {odRequest.reason}
                        </p>
                      </div>
                      <span
                        className={`font-semibold ${
                          odRequest.status === 'pending'
                            ? 'text-yellow-500'
                            : odRequest.status === 'approved'
                            ? 'text-green-500'
                            : 'text-red-500'
                        }`}
                      >
                        {odRequest.status.charAt(0).toUpperCase() + odRequest.status.slice(1)}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface Fee {
  name: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'unpaid';
}

interface Transaction {
  billNumber: number;
  billItem: string;
  amount: number;
  status: 'settled' | 'pending';
  discount: number;
}

interface BillingTabProps {
  setShowPaymentOptions: React.Dispatch<React.SetStateAction<boolean>>;
  showPaymentOptions: boolean;
}

function BillingTab({ setShowPaymentOptions, showPaymentOptions }: BillingTabProps) {
  const [fees, setFees] = useState<Fee[]>([
    { name: 'Tuition Fees 📚', amount: 5000, dueDate: '2024-12-01', status: 'unpaid' },
    { name: 'Lab Fees ⚗️', amount: 200, dueDate: '2024-12-01', status: 'unpaid' },
  ]);

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedFees, setSelectedFees] = useState<number[]>([]); // Array of fee indexes

  // Calculate total amount due only for unpaid fees
  const totalAmount = fees
    .filter(fee => fee.status === 'unpaid')
    .reduce((total, fee) => total + fee.amount, 0);

  const handlePayNow = () => {
    setShowPaymentOptions(!showPaymentOptions);
  };

  const handleClearAllDue = () => {
    const newTransactions: Transaction[] = fees
      .filter((fee, index) => fee.status === 'unpaid')
      .map(fee => ({
        billNumber: transactions.length + 1,
        billItem: fee.name,
        amount: fee.amount,
        status: 'settled',
        discount: 0,
      }));

    setTransactions([...transactions, ...newTransactions]);
    setFees(fees.map(fee => (fee.status === 'unpaid' ? { ...fee, status: 'paid' } : fee)));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6">Billing 💳</h2>
        <div className="space-y-4">
          {fees.map((fee, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="text-white">{fee.name}</p>
                <p className="text-gray-400">Due Date: {fee.dueDate}</p>
              </div>
              <p className="text-white">${fee.amount}</p>
            </div>
          ))}
          <div className="bg-gray-700 p-4 rounded-lg flex justify-between font-bold items-center">
            <p className="text-white">Total Amount Due</p>
            <p className="text-white">${totalAmount}</p>
          </div>
        </div>
        <button
          onClick={handleClearAllDue}
          className="mt-6 w-full bg-[#38b6ff] text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
          disabled={totalAmount === 0}
        >
          Clear All Dues ❌
        </button>
        <button
          onClick={handlePayNow}
          className="mt-2 w-full bg-black text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
        >
          Pay Now 💸
        </button>
        {showPaymentOptions && (
          <div className="mt-4 bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg text-white mb-2">Payment Options 🪙:</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center">
                <FaCreditCard className="mr-2 text-[#38b6ff]" /> Credit Card
              </li>
              <li className="flex items-center">
                <FaPaypal className="mr-2 text-[#38b6ff]" /> PayPal
              </li>
              <li className="flex items-center">
                <FaApple className="mr-2 text-[#38b6ff]" /> Apple Pay
              </li>
              <li className="flex items-center">
                <FaMoneyCheck className="mr-2 text-[#38b6ff]" /> Bank Transfer
              </li>
              <li className="flex items-center">
                <FaQrcode className="mr-2 text-[#38b6ff]" /> UPI
              </li>
              <li className="flex items-center">
                <FaCalendar className="mr-2 text-[#38b6ff]" /> GrayQuest (Zero Interest EMI)
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Display Transactions */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Transaction History 📜</h2>
        <div className="bg-gray-800 p-4 rounded-lg">
          {transactions.length === 0 ? (
            <p className="text-gray-400">No transactions found.</p>
          ) : (
            transactions.map((transaction, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between mb-2">
                <div>
                  <p className="text-white">Bill Number: {transaction.billNumber}</p>
                  <p className="text-gray-400">{transaction.billItem}</p>
                  <p className="text-gray-400">Amount: ${transaction.amount}</p>
                  <p className="text-gray-400">Status: {transaction.status === 'settled' ? '✅ Settled' : '🕒 Pending'}</p>
                </div>
                <button className="bg-[#38b6ff] text-white px-2 py-1 rounded">
                  Download Receipt 📥
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function IDCardTab() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-xl p-6 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Student ID Card</h2>
        <div className="flex bg-gray-700 rounded-lg overflow-hidden shadow-lg">
          {/* Plain Black Background */}
          <div className="p-4 flex-1 flex flex-col justify-center">
            <p className="text-2xl text-white font-bold">Tony Stark</p>
            <p className="text-lg text-gray-400">Engineering Major</p>
            <p className="text-lg text-gray-400">Massachusetts Institute of Technology</p>
            <p className="text-lg text-gray-400">ID: 12345678</p>
            <p className="text-lg text-gray-400">Mobile: (123) 456-7890</p>
            <p className="text-lg text-gray-400">Email: tony.stark@mit.edu</p>
            <p className="text-lg text-gray-400">Address: 10880 Malibu Point, Malibu, CA 90265</p>
            <p className="text-lg text-gray-400">Blood Group: AB+</p>
            <p className="text-lg text-gray-400">Academic Year: 2024 - 2025</p>
            <p className="text-lg text-gray-400">Enrollment Date: September 25, 2023</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white text-center">This card is issued by Massachusetts Institute of Technology and is valid until graduation. Unauthorized alterations are prohibited.</p>
        </div>
      </div>
    </div>
  );
}
