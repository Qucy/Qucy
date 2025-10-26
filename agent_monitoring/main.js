// HSBC Agentic Monitoring Dashboard - Main JavaScript

// Global variables
let performanceChart, healthChart;
let currentTimeRange = '1h';
let updateInterval;

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeTypedText();
    initializeCharts();
    initializeRealTimeUpdates();
    initializeAnimations();
    initializeHexagonBackground();
});

// Typed text animation for hero section
function initializeTypedText() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Real-Time Agent Monitoring',
            'Intelligent System Analytics',
            'Proactive Alert Management',
            'Comprehensive Performance Insights'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Initialize charts
function initializeCharts() {
    // Performance Chart
    const performanceChartDom = document.getElementById('performance-chart');
    performanceChart = echarts.init(performanceChartDom);
    
    const performanceOption = {
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#DB0011',
            borderWidth: 1,
            textStyle: { color: '#374151' }
        },
        legend: {
            data: ['Response Time', 'Throughput', 'Error Rate'],
            textStyle: { color: '#6B7280' }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: generateTimeLabels(),
            axisLine: { lineStyle: { color: '#E5E7EB' } },
            axisLabel: { color: '#6B7280' }
        },
        yAxis: {
            type: 'value',
            axisLine: { lineStyle: { color: '#E5E7EB' } },
            axisLabel: { color: '#6B7280' },
            splitLine: { lineStyle: { color: '#F3F4F6' } }
        },
        series: [
            {
                name: 'Response Time',
                type: 'line',
                smooth: true,
                data: generateRandomData(24, 100, 500),
                itemStyle: { color: '#DB0011' },
                areaStyle: { color: 'rgba(219, 0, 17, 0.1)' }
            },
            {
                name: 'Throughput',
                type: 'line',
                smooth: true,
                data: generateRandomData(24, 50, 200),
                itemStyle: { color: '#10B981' },
                areaStyle: { color: 'rgba(16, 185, 129, 0.1)' }
            },
            {
                name: 'Error Rate',
                type: 'line',
                smooth: true,
                data: generateRandomData(24, 0, 10),
                itemStyle: { color: '#F59E0B' },
                areaStyle: { color: 'rgba(245, 158, 11, 0.1)' }
            }
        ]
    };
    
    performanceChart.setOption(performanceOption);
    
    // Health Chart
    const healthChartDom = document.getElementById('health-chart');
    healthChart = echarts.init(healthChartDom);
    
    const healthOption = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#DB0011',
            borderWidth: 1,
            textStyle: { color: '#374151' }
        },
        legend: {
            orient: 'horizontal',
            bottom: '0%',
            textStyle: { color: '#6B7280' }
        },
        series: [
            {
                name: 'System Health',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '45%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold',
                        color: '#374151'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 75, name: 'Healthy', itemStyle: { color: '#10B981' } },
                    { value: 15, name: 'Warning', itemStyle: { color: '#F59E0B' } },
                    { value: 10, name: 'Critical', itemStyle: { color: '#EF4444' } }
                ]
            }
        ]
    };
    
    healthChart.setOption(healthOption);
    
    // Make charts responsive
    window.addEventListener('resize', function() {
        performanceChart.resize();
        healthChart.resize();
    });
}

// Generate time labels for charts
function generateTimeLabels() {
    const labels = [];
    const now = new Date();
    for (let i = 23; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60 * 60 * 1000);
        labels.push(time.getHours() + ':00');
    }
    return labels;
}

// Generate random data for charts
function generateRandomData(length, min, max) {
    const data = [];
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

// Real-time updates
function initializeRealTimeUpdates() {
    updateInterval = setInterval(function() {
        updateMetrics();
        updateCharts();
    }, 5000);
}

// Update metrics with animation
function updateMetrics() {
    // Update hero metrics
    animateNumber('active-agents', 20, 28);
    animateNumber('success-rate', 95, 99.9, '%');
    animateNumber('uptime', 99.9, 99.99, '%');
    
    // Update status counts
    animateNumber('online-count', 16, 22);
    animateNumber('warning-count', 2, 6);
    animateNumber('critical-count', 0, 3);
    
    // Update resource usage
    animateNumber('cpu-usage', 60, 80, '%');
    animateNumber('memory-usage', 45, 65, '%');
    animateNumber('network-usage', 15, 35, '%');
    
    // Update progress bars
    updateProgressBar('cpu-usage');
    updateProgressBar('memory-usage');
    updateProgressBar('network-usage');
}

// Animate number changes
function animateNumber(elementId, min, max, suffix = '') {
    const element = document.getElementById(elementId);
    const currentValue = parseFloat(element.textContent) || min;
    const newValue = Math.random() * (max - min) + min;
    
    anime({
        targets: { value: currentValue },
        value: newValue,
        duration: 1000,
        easing: 'easeOutQuart',
        update: function(anim) {
            const value = anim.animatables[0].target.value;
            element.textContent = (suffix === '%' ? value.toFixed(1) : Math.round(value)) + suffix;
        }
    });
}

// Update progress bars
function updateProgressBar(elementId) {
    const element = document.getElementById(elementId);
    const value = parseFloat(element.textContent);
    const progressBar = element.parentElement.nextElementSibling.querySelector('div');
    
    anime({
        targets: progressBar,
        width: value + '%',
        duration: 1000,
        easing: 'easeOutQuart'
    });
}

// Update charts with new data
function updateCharts() {
    // Update performance chart
    const newData = {
        0: generateRandomData(1, 100, 500),
        1: generateRandomData(1, 50, 200),
        2: generateRandomData(1, 0, 10)
    };
    
    performanceChart.appendData({
        seriesIndex: 0,
        data: newData[0]
    });
    performanceChart.appendData({
        seriesIndex: 1,
        data: newData[1]
    });
    performanceChart.appendData({
        seriesIndex: 2,
        data: newData[2]
    });
    
    // Update health chart data
    const healthData = [
        { value: Math.random() * 30 + 60, name: 'Healthy', itemStyle: { color: '#10B981' } },
        { value: Math.random() * 20 + 10, name: 'Warning', itemStyle: { color: '#F59E0B' } },
        { value: Math.random() * 10 + 5, name: 'Critical', itemStyle: { color: '#EF4444' } }
    ];
    
    healthChart.setOption({
        series: [{
            data: healthData
        }]
    });
}

// Initialize animations
function initializeAnimations() {
    // Animate metric cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 600,
                    easing: 'easeOutQuart',
                    delay: anime.stagger(100)
                });
            }
        });
    }, observerOptions);
    
    // Observe all metric cards
    document.querySelectorAll('.metric-card').forEach(card => {
        observer.observe(card);
    });
    
    // Animate navigation items
    anime({
        targets: '.nav-item',
        translateY: [-10, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuart',
        delay: anime.stagger(100, {start: 300})
    });
}

// Initialize hexagon background
function initializeHexagonBackground() {
    // Create subtle hexagonal pattern using CSS
    const style = document.createElement('style');
    style.textContent = `
        .hexagon-bg::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 20% 20%, rgba(219, 0, 17, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(219, 0, 17, 0.02) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(219, 0, 17, 0.01) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
        }
    `;
    document.head.appendChild(style);
}

// Time range update
function updateTimeRange(range) {
    currentTimeRange = range;
    
    // Update button styles
    document.querySelectorAll('[onclick^="updateTimeRange"]').forEach(btn => {
        btn.className = 'px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium';
    });
    event.target.className = 'px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-medium';
    
    // Update charts based on time range
    updateChartsForTimeRange(range);
    
    // Show feedback
    showToast(`Updated to ${range} view`, 'success');
}

// Update charts for different time ranges
function updateChartsForTimeRange(range) {
    let dataPoints, timeLabels;
    
    switch(range) {
        case '1h':
            dataPoints = 12;
            timeLabels = Array.from({length: dataPoints}, (_, i) => `${i * 5}m`);
            break;
        case '24h':
            dataPoints = 24;
            timeLabels = Array.from({length: dataPoints}, (_, i) => `${i}h`);
            break;
        case '7d':
            dataPoints = 7;
            timeLabels = Array.from({length: dataPoints}, (_, i) => `Day ${i + 1}`);
            break;
    }
    
    // Update performance chart
    performanceChart.setOption({
        xAxis: {
            data: timeLabels
        },
        series: [
            {
                data: generateRandomData(dataPoints, 100, 500)
            },
            {
                data: generateRandomData(dataPoints, 50, 200)
            },
            {
                data: generateRandomData(dataPoints, 0, 10)
            }
        ]
    });
}

// Modal functions
function showModal(type) {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    
    // Animate modal appearance
    anime({
        targets: modal.querySelector('.bg-white'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
    
    // Simulate processing
    setTimeout(() => {
        closeModal();
        showToast('Operation completed successfully', 'success');
    }, 3000);
}

function closeModal() {
    const modal = document.getElementById('modal');
    
    anime({
        targets: modal.querySelector('.bg-white'),
        scale: [1, 0.8],
        opacity: [1, 0],
        duration: 200,
        easing: 'easeInQuart',
        complete: () => {
            modal.classList.add('hidden');
        }
    });
}

// Alert management
function acknowledgeAlert(alertId) {
    const alertElement = event.currentTarget;
    
    // Animate alert removal
    anime({
        targets: alertElement,
        translateX: [0, 100],
        opacity: [1, 0],
        duration: 300,
        easing: 'easeInQuart',
        complete: () => {
            alertElement.remove();
            showToast('Alert acknowledged', 'success');
        }
    });
}

// Utility functions
function generateReport() {
    showModal('generate-report');
}

function exportData() {
    showModal('export-data');
}

function systemCheck() {
    showModal('system-check');
}

// Toast notifications
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed top-20 right-4 px-6 py-3 rounded-lg text-white font-medium z-50 transform translate-x-full transition-transform duration-300`;
    
    switch(type) {
        case 'success':
            toast.classList.add('bg-green-600');
            break;
        case 'error':
            toast.classList.add('bg-red-600');
            break;
        case 'warning':
            toast.classList.add('bg-yellow-600');
            break;
        default:
            toast.classList.add('bg-blue-600');
    }
    
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'r':
                e.preventDefault();
                updateMetrics();
                showToast('Metrics refreshed', 'success');
                break;
            case 'h':
                e.preventDefault();
                window.location.href = 'index.html';
                break;
        }
    }
});

// Add keyboard shortcut help
document.addEventListener('keydown', function(e) {
    if (e.key === '?' && e.shiftKey) {
        e.preventDefault();
        alert('Keyboard Shortcuts:\nCtrl+R - Refresh Metrics\nCtrl+H - Home\nShift+? - Show this help');
    }
});

// Initialize tooltips for better UX
document.addEventListener('DOMContentLoaded', function() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
});

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'absolute bg-gray-900 text-white px-2 py-1 rounded text-sm z-50';
    tooltip.textContent = e.target.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.absolute.bg-gray-900');
    if (tooltip) {
        tooltip.remove();
    }
}