-- Scale Limited - Supabase Schema

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Table: leads (Contact form submissions)
create table if not exists public.leads (
    id uuid default uuid_generate_v4() primary key,
    first_name text not null,
    last_name text not null,
    email text not null,
    phone text,
    company text,
    country text,
    service text,
    company_size text,
    message text not null,
    status text default 'New' check (status in ('New', 'Contacted', 'Qualified', 'Converted', 'Closed', 'Spam')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: consultations (Booking form submissions)
create table if not exists public.consultations (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    company text not null,
    email text not null,
    phone text,
    country text,
    service text,
    preferred_date date,
    preferred_time text,
    timezone text,
    budget_range text,
    requirements text not null,
    notes text,
    status text default 'New' check (status in ('New', 'Contacted', 'Qualified', 'Converted', 'Closed', 'Spam')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: portfolio_projects
create table if not exists public.portfolio_projects (
    id uuid default uuid_generate_v4() primary key,
    title text not null,
    slug text not null unique,
    industry text not null,
    service text not null,
    summary text not null,
    challenge text not null,
    solution text not null,
    results text not null,
    technologies text[] default '{}',
    featured boolean default false,
    published boolean default true,
    image text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: testimonials
create table if not exists public.testimonials (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    position text not null,
    company text not null,
    content text not null,
    image text,
    featured boolean default false,
    published boolean default true,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: services
create table if not exists public.services (
    id uuid default uuid_generate_v4() primary key,
    title text not null,
    slug text not null unique,
    short_description text not null,
    description text not null,
    benefits text[] default '{}',
    capabilities text[] default '{}',
    published boolean default true,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: industries
create table if not exists public.industries (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    slug text not null unique,
    description text not null,
    challenges text[] default '{}',
    solutions text[] default '{}',
    published boolean default true,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: site_settings
create table if not exists public.site_settings (
    id uuid default uuid_generate_v4() primary key,
    key text not null unique,
    value text not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Updated_at Trigger Function
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

-- Apply triggers
create trigger on_leads_updated before update on public.leads for each row execute procedure handle_updated_at();
create trigger on_consultations_updated before update on public.consultations for each row execute procedure handle_updated_at();
create trigger on_portfolio_projects_updated before update on public.portfolio_projects for each row execute procedure handle_updated_at();
create trigger on_services_updated before update on public.services for each row execute procedure handle_updated_at();
create trigger on_industries_updated before update on public.industries for each row execute procedure handle_updated_at();
create trigger on_site_settings_updated before update on public.site_settings for each row execute procedure handle_updated_at();

-- Row Level Security (RLS) Setup

-- Enable RLS on all tables
alter table public.leads enable row level security;
alter table public.consultations enable row level security;
alter table public.portfolio_projects enable row level security;
alter table public.testimonials enable row level security;
alter table public.services enable row level security;
alter table public.industries enable row level security;
alter table public.site_settings enable row level security;

-- Leads: Anyone can insert (via API with service role or anon), but only authenticated users can select/update/delete
create policy "Allow public inserts to leads" on public.leads for insert with check (true);
create policy "Allow auth users full access to leads" on public.leads for all using (auth.role() = 'authenticated');

-- Consultations: Anyone can insert, only auth can select/update/delete
create policy "Allow public inserts to consultations" on public.consultations for insert with check (true);
create policy "Allow auth users full access to consultations" on public.consultations for all using (auth.role() = 'authenticated');

-- Portfolio: Public can read published, auth can do everything
create policy "Allow public to view published portfolio" on public.portfolio_projects for select using (published = true);
create policy "Allow auth users full access to portfolio" on public.portfolio_projects for all using (auth.role() = 'authenticated');

-- Testimonials: Public can read published, auth can do everything
create policy "Allow public to view published testimonials" on public.testimonials for select using (published = true);
create policy "Allow auth users full access to testimonials" on public.testimonials for all using (auth.role() = 'authenticated');

-- Services: Public can read published, auth can do everything
create policy "Allow public to view published services" on public.services for select using (published = true);
create policy "Allow auth users full access to services" on public.services for all using (auth.role() = 'authenticated');

-- Industries: Public can read published, auth can do everything
create policy "Allow public to view published industries" on public.industries for select using (published = true);
create policy "Allow auth users full access to industries" on public.industries for all using (auth.role() = 'authenticated');

-- Site Settings: Public can read, auth can do everything
create policy "Allow public to view settings" on public.site_settings for select using (true);
create policy "Allow auth users full access to settings" on public.site_settings for all using (auth.role() = 'authenticated');
